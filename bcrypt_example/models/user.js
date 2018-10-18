const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const config = require("./../config/config");
const SALT_ROUNDS = Number(config.salt_rounds);

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

/* Async versions*/

userSchema.pre("save", async function(next) {
  try {
    if (this.isModified(this.password) || this.isNew) {
      let salt = await bcrypt.genSalt(SALT_ROUNDS);
      let hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
      next();
    }
  } catch (err) {
    throw new Error(`${err.error || err.message || err}`);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error(`${err.error || err.message || err}`);
  }
};

/*Synchronous versions */

// userSchema.pre("save", function(next) {
//   if (this.isModified("password") || this.isNew) {
//     this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
//   }
//   next();
// });

// userSchema.methods.comparePassword = function(candidatePassword) {
//   return bcrypt.compareSync(candidatePassword, this.password);
// };

module.exports = mongoose.model("User", userSchema);
