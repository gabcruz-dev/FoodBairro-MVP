import express from "express";

import { router } from "./routes/routes";

import cors from "cors";

const corsOptions = {
  origin: "*",
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor online na porta: ${port}`));