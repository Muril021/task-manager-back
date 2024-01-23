import { AppDataSource } from "./data-source"
import env from '../env';
import App from "./App";

AppDataSource.initialize()
  .then(async () => {
    const app = new App().express;

    return app.listen(env.APP_PORT, () => {
      console.log(`Server running at port ${env.APP_PORT}`);
    });
  })
  .catch(error => console.log(error))
