const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Permission name is required"],
      unique: true,
      trim: true,
      uppercase: true,
    },

    module: {
      type: String,
      required: [true, "Module name is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Permission = mongoose.model("Permission", permissionSchema);


module.exports = Permission;