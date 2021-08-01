import "reflect-metadata";
import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { bootstrapDatabaseConnection } from "./db";

useContainer(Container);

const bootstrap = bootstrapDatabaseConnection().then(() =>
    createExpressServer({
        validation: true,
        cors: true,
        defaultErrorHandler: false,
        interceptors: [__dirname + "/interceptors/*.interceptor.ts"],
        middlewares: [__dirname + "/middlewares/*.middleware.ts"],
        controllers: [__dirname + "/controllers/*.controller.ts"],
    })
);

export default bootstrap;
