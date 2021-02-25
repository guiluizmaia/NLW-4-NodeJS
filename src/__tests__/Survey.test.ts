import request from 'supertest';
import { app } from '../app';
import createConnection from '../database'

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "usr@example.com",
            description: "User Example"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "uasr@example.com",
            description: "Usaer Example"
        });

        const response = await request(app).get('/all');

        expect(response.body.length).toBe(2)
    });

});