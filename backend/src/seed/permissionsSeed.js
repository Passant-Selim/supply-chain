const Permission = require("../modules/permission/permissionModel");
const permissions = require("./data/permissions");

const seedPermissions = async () => {
  for (const module in permissions) {
    for (const permission of permissions[module]) {
      const exists = await Permission.findOne({
        name: permission,
      });

      if (!exists) {
        await Permission.create({
          name: permission,
          module,
        });
      }
    }
  }

  console.log("Permissions seeded successfully.");
};
module.exports = seedPermissions;


