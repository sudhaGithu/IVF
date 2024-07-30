// app/middleware/authorization.js
const Role = require('../models/AdminModels/role');  // Adjusted path

const checkPermission = async (roleName, action) => {
  const role = await Role.findOne({ name: roleName });
  if (!role) return false;
  return role.permissions.includes(action);
};

const authorize = (requiredRole, action) => {
  return async (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (!(await checkPermission(req.user.role, action))) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    next();
  };
};

module.exports = authorize;
