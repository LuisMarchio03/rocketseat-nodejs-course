import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import createConnection from "@shared/infra/typeorm";
import "@shared/container";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";

import { router } from "@shared/infra/http/routes";
import { AppError } from "@shared/errors/AppError";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
        statusCode: err.statusCode,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
