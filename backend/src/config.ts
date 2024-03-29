import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "videosdb",
  MONGO_USERNAME: process.env.MONGO_USERNAME || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
  MONGO_HOSTNAME: process.env.MONGO_HOST || "localhost",
  PORT: process.env.MONGO_PORT || 8080,
};
