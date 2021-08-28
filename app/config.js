// config is the only place that accesses .env
import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3001,
  db: process.env.DB_CLIENT_URL,
};
