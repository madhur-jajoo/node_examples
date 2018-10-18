const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret, options) {
        delete ret.__v;
        return ret;
      }
    }
  }
);

module.exports = mongoose.model("User", userSchema);
