import { load } from 'ts-dotenv';

const env = load({
  APP_PORT: Number,

  TYPEORM_HOST: String,
  TYPEORM_USERNAME: String,
  TYPEORM_PASSWORD: String,
  TYPEORM_DATABASE: String,
  TYPEORM_PORT: Number,
});

export default env;