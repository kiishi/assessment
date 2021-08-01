import mongoose from "mongoose";
import config from "../../src/config";
import supertest from "supertest";
import app from "../../src/app";

describe("E2E", () => {
    beforeAll(async () => {
        await mongoose.connect(config.database.url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("POST /get-records returns 200 f", async () => {
        const server = await app;
        const response = await supertest(server)
            .post("/get-records")
            .send({
                startDate: "2016-05-31",
                endDate: "2021-05-31",
                minCount: 4000,
                maxCount: 6000,
            })
            .expect(200)

        expect(response.body).toBeDefined()
        expect(response.body.msg).toEqual("Success")
        expect(response.body.code).toEqual(0)
        expect(response.body.records.length).toBeGreaterThan(0)
    });

    it("POST /get-records returns 400 for bad payload", async () => {
        const server = await app;
        const response = await supertest(server)
            .post("/get-records")
            .send({
                startDate: "2016-05-31",
                endDate: "2021-05-31",
                minCount: 4000,
            })
            .expect(400)

        expect(response.body).toBeDefined()
        expect(response.body.message).toEqual("Bad Payload")
    });

    it("POST /get-records returns 400 for invalid date format", async () => {
        const server = await app;
        const response = await supertest(server)
            .post("/get-records")
            .send({
                startDate: "05-05-2005",
                endDate: "2021-05-31",
                minCount: 4000,
                maxCount: 6000,
            })
            .expect(400)

        expect(response.body).toBeDefined()
        expect(response.body.message).toEqual("Bad Payload")
    });
});
