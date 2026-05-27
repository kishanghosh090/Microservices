import type { Application, Request, Response } from "express";

export const createApp = (): Application => {
  const express = require("express");
  const app = express();

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Define routes
  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });



  return app;
};
