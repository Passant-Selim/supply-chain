const User = require("../modules/user/userModel");
const Role = require("../modules/role/roleModel");

const seedSuperAdmin = async () => {
  const superAdmin = {
    firstName: process.env.SUPER_ADMIN_FIRST_NAME,
    lastName: process.env.SUPER_ADMIN_LAST_NAME,
    email: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.SUPER_ADMIN_PASSWORD,
    phone: process.env.SUPER_ADMIN_PHONE,
  };

  // Check if Super Admin already exists
  const existingSuperAdmin = await User.findOne({
    email: superAdmin.email,
  });

  if (existingSuperAdmin) {
    console.log("Super Admin already exists.");
    return;
  }

  // Get SUPER_ADMIN role
  const superAdminRole = await Role.findOne({
    name: "SUPER_ADMIN",
  });

  if (!superAdminRole) {
    throw new Error("SUPER_ADMIN role not found. Please run Roles Seed first.");
  }

  // Create Super Admin
  await User.create({
    firstName: superAdmin.firstName,
    lastName: superAdmin.lastName,
    email: superAdmin.email,
    password: superAdmin.password,
    phone: superAdmin.phone,
    role: superAdminRole._id,
  });

  console.log("Super Admin created successfully.");
};

module.exports = seedSuperAdmin;