const Role = require("../modules/role/roleModel");
const Permission = require("../modules/permission/permissionModel");

const roles = require("./data/roles");

const seedRoles = async () => {
  const existingRoles = await Role.countDocuments();

  if (existingRoles > 0) {
    console.log("Roles already exist.");
    return;
  }

  for (const role of roles) {
    const permissionDocuments = await Permission.find({
      name: {
        $in: role.permissions,
      },
    });

    await Role.create({
      name: role.name,
      permissions: permissionDocuments.map(
        (permission) => permission._id
      ),
    });
  }

  console.log("Roles seeded successfully.");
};

module.exports = seedRoles;