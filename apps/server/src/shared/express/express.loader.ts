import express, { type Express } from "express";

export const init = (): Express => {
  const app = express();
  const PORT = process.env["PORT"] ?? 3000;
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  return app;
};
