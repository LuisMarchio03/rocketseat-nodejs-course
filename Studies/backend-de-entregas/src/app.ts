import express, { Response, Request } from "express";
import "express-async-errors";
import { routes } from "./routes/routes";

const app = express();

app.use(routes);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
      stack: err.stack,
    });
  }

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
});

export { app };
