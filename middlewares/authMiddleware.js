const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
// const User = require('../models/usermodel');
const Role = require('../../models/AdminMmodels/role');
const RolePermission = require('../../models/AdminMmodels/rolePermission');
const ModulePermission = require('../../models/AdminMmodels/modulePermission');
//const RolePermission = require('../models/rolePermission');
const Module = require('../../models/AdminMmodels/module');
const Permission = require('../../models/AdminMmodels/permission');
const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id)
                .select('-password')
                .populate('role');
            
            if (!req.user) {
                res.status(401);
                throw new Error('Not authorized, user not found');
            }

            // Populate rolePermissions through a separate query
            const rolePermissions = await RolePermission.find({ role: req.user.role._id })
                .populate({
                    path: 'modulePermission',
                    populate: [{ path: 'module' }, { path: 'permission' }]
                });

            req.user.rolePermissions = rolePermissions;

            next();
        } catch (error) {
            console.error('Token verification error:', error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

const authorize = (moduleName, permissionName) => {
    return asyncHandler(async (req, res, next) => {
        const user = req.user;

        if (!user || !user.rolePermissions) {
            res.status(403);
            throw new Error('Not authorized for this action');
        }

        const hasPermission = user.rolePermissions.some(rp =>
            rp.modulePermission.module.name === moduleName && rp.modulePermission.permission.name === permissionName
        );

        if (!hasPermission) {
            res.status(403);
            throw new Error('Not authorized for this action');
        }

        next();
    });
};

module.exports = { protect, authorize };




