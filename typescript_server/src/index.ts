import { config } from 'dotenv';
config();

import * as express from 'express';

class App {
  public app;

  constructor() {
    this.app = express();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.app.get('/', (req: any, res: any) => {
      res.send(req.hostname);
    });
  }
}

new App().app.listen(process.env.PORT, err => {
  if (err) throw err;
  console.log(`Server started on port: ${process.env.PORT}`);
});
