const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const connectDB = require('../config/db');
const Module = require('../models/AdminModels/module');
const Permission = require('../models/AdminModels/permission');
const ModulePermission = require('../models/AdminModels/modulePermission');
const Role = require('../models/AdminModels/role');
const RolePermission = require('../models/AdminModels/rolePermission');

// dotenv.config();

const seed = async () => {
    try {
        // await connectDB();
        mongoose.connect('mongodb://localhost/ticketingSystem', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });


        console.log('Database connected');

        // Clear existing data
        await Module.deleteMany({});
        await Permission.deleteMany({});
        await ModulePermission.deleteMany({});
        await Role.deleteMany({});
        await RolePermission.deleteMany({});

        // Create Modules
        const doctorModule = await Module.create({ name: 'DoctorModule' });
        // const departmentModule = await Module.create({ name: 'DepartmentModule' });

        // Create Permissions
        const createPermission = await Permission.create({ name: 'create' });
        const viewPermission = await Permission.create({ name: 'view' });
        const editPermission = await Permission.create({ name: 'edit' });
        const deletePermission = await Permission.create({ name: 'delete' });

        // Create ModulePermissions
        const doctorCreatePermission = await ModulePermission.create({ module: doctorModule._id, permission: createPermission._id });
        const doctorViewPermission = await ModulePermission.create({ module: doctorModule._id, permission: viewPermission._id });
        const doctorEditPermission = await ModulePermission.create({ module: doctorModule._id, permission: editPermission._id });
        const doctorDeletePermission = await ModulePermission.create({ module: doctorModule._id, permission: deletePermission._id });

        // const departmentCreatePermission = await ModulePermission.create({ module: departmentModule._id, permission: createPermission._id });
        // const departmentViewPermission = await ModulePermission.create({ module: departmentModule._id, permission: viewPermission._id });
        // const departmentEditPermission = await ModulePermission.create({ module: departmentModule._id, permission: editPermission._id });
        // const departmentDeletePermission = await ModulePermission.create({ module: departmentModule._id, permission: deletePermission._id });

        // Create Roles
        const adminRole = await Role.create({ name: 'Admin' });
        const doctorRole = await Role.create({ name: 'Doctor' });

        // Assign Permissions to Roles
        const adminRolePermissions = [
            doctorCreatePermission._id, doctorViewPermission._id, doctorEditPermission._id, doctorDeletePermission._id,
            departmentCreatePermission._id, departmentViewPermission._id, departmentEditPermission._id, departmentDeletePermission._id
        ];
        const doctorRolePermissions = [doctorViewPermission._id, doctorEditPermission._id];

        for (const modulePermission of adminRolePermissions) {
            await RolePermission.create({ role: adminRole._id, modulePermission });
        }
        for (const modulePermission of doctorRolePermissions) {
            await RolePermission.create({ role: doctorRole._id, modulePermission });
        }

        console.log('Modules, permissions, and roles seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seed();
