export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3001,
  defaultLimit: +process.env.DEFAULT_LIMIT || 8,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
});
