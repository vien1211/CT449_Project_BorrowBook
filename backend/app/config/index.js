const dotenv = require("dotenv");

dotenv.config();
const config = {
  app: {
    port: 3000,
  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
  },
};

module.exports = config;
