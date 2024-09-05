// middleware/permissionMiddleware.js
const Admin = require('../models/adminModel');
const CenterAdminModule = require('../models/Roles/permissionsIVFCenters');
const MasterModule = require('../models/Roles/masterModuleModel');
const MasterPermissions = require('../models/Roles/modulePermissions');
const Permission = require('../models/Roles/permission');

// Middleware to check permissions
const checkPermission = (moduleName, permissionName) => async (req, res, next) => {
    try {
        // Assume user ID is available in the request (e.g., set by authentication middleware)
        console.log("modulename" , moduleName  ,"permissionName" , permissionName);
        
        const userId = req.user.id;
        //console.log(("Permission"));
        
        // Fetch user with roles and permissions
        const admin = await Admin.findById(userId).populate('role');

            // .populate({
            //     path: 'role',
            //     populate: {
            //         path: 'permissions',
            //         populate: {
            //             path: 'moduleId',
            //             match: { modulename: moduleName }
            //         }
            //     }
            // });
            if(!(admin.role.name === 'Admin')) return res.status(404).send('User not found');
            //console.log(admin.role.name);

            
            
            //console.log(admin);
            
            //console.log("permission 1");
            
        // if (!admin) 

        // Fetch the user's center-admin module permissions
        const centerAdminModule = await CenterAdminModule.findOne({ adminId: userId })
            .populate('centerId')
            .populate('adminId')
            .populate('modulePermissions.moduleId')
            .populate('modulePermissions.permissions');
            // .populate({
            //     path: 'modulePermissions.moduleId',
            //     populate: {
            //         path: 'permissions'
            //     }
            // });
            console.log(centerAdminModule);
            
            console.log("permission 2");
            //console.log(CenterAdminModule.modulePermissions._id);
            
            
        if (!centerAdminModule) return res.status(404).send('CenterAdminModule not found');

        // Flatten all permissions
        const userPermissions = centerAdminModule.modulePermissions
            .filter(mod => mod.moduleId.modulename === moduleName)
            .flatMap(mod => mod.permissions.map(perm => perm.name));
        //console.log(userPermissions);
        
        // Check if user has the required permission
        if (userPermissions.includes(permissionName)) {
            next(); // Permission granted, proceed to the route handler
        } else {
            res.status(403).send('Forbidden: You do not have the required permissions');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = checkPermission;
