require("dotenv").config();

const mongoose = require("mongoose");

const dbConnection = require("../config/db");
const seedPermissions = require("./permissionsSeed");
const seedRoles = require("./rolesSeed");
const seedSuperAdmin = require("./superAdminSeed");

const seed = async () => {
  try {
    await dbConnection();

    await seedPermissions();
    await seedRoles();
    await seedSuperAdmin();

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
};

seed();