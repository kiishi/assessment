import mongoose from "mongoose";
import config from "./config";

export const bootstrapDatabaseConnection = async () => {
    await mongoose.connect(config.database.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    mongoose.connection.on("disconnect", () => {
        console.log("[DB disconnected]");
    });
};
