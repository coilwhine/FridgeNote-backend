import cors from "cors";
import express, { json } from "express";
import { connect } from "./utils/dal";
import { authRouter } from "./controller/auth-controller";
import { listsRouter } from "./controller/lists-controller";

const server = express();

const port = 3001;

server.use(cors());
server.use(json());
server.use('/auth', authRouter);
server.use('/api', listsRouter);

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    connect()
})