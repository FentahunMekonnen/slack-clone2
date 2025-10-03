import "dotenv/config";

export const ENV_VAR = {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
};
