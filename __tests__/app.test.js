const db = require("../db/connection");
const request = require("supertest");
const app = require("../app");
const data = require("../db/data/test-data/index");
const seed = require("../db/seeds/seed");

beforeAll(() => seed(data));
afterAll(() => db.end());

describe("GET /api/topics", () => {
  test("gives status 200", async () => {
    const response = await request(app).get("/api/topics");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.topics)).toBe(true);
  });
  test("gives an array", async () => {
    const response = await request(app).get("/api/topics");
    expect(Array.isArray(response.body.topics)).toBe(true);
  });
  test("each topic contains description, slug and img_url keys", async () => {
    const response = await request(app).get("/api/topics");
    const topics = response.body.topics;
    topics.forEach((topic) => {
      expect(topic.description).toBeString();
      expect(topic.slug).toBeString();
      expect(topic.img_url).toBeString();
    });
  });
});
