import bootstrapServer from "./app";
import config from "./config";

bootstrapServer
    .then((server) =>
        server.listen(config.port, () => {
            console.log(`Listening on ${config.port}...`);
        })
    )
    .catch((error) => {
        console.log(`[Database] Database Connection Error -- ${error.message}`);
    });
