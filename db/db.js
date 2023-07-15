const mongoose = require("mongoose");

const db = async (req, res, next) => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("Db Connection Error");
  }
};

// module.exports = { db };
