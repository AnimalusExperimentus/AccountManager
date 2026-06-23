import express, { type Express } from "express";
import { router } from "../../modules/routes/routes"


export const init = (): Express => {
  const app = express();
  const PORT = process.env["PORT"] ?? 3000;
  app.use(express.json());
  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  return app;
};
