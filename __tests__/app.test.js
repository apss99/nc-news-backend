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

describe("GET /api/articles", () => {
  test("gives status 200", async () => {
    const response = await request(app).get("/api/articles");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.articles)).toBe(true);
  });
  test("gives an array", async () => {
    const response = await request(app).get("/api/articles");
    expect(Array.isArray(response.body.articles)).toBe(true);
  });
  test("each article contains title, topic, author, body, created_at, votes, article_img_url keys", async () => {
    const response = await request(app).get("/api/articles");
    const articles = response.body.articles;
    articles.forEach((article) => {
      expect(article.title).toBeString();
      expect(article.topic).toBeString();
      expect(article.body).toBeString();
      expect(article.created_at).toBeString();
      expect(article.votes).toBeNumber();
      expect(article.article_img_url).toBeString();
    });
  });
  test("comment_count key with number of comments on each key is returned", async () => {
    const response = await request(app).get("/api/articles");
    const articles = response.body.articles;
    articles.forEach((article) => {
      expect(article.comment_count).toBeNumber();
    });
  });
});
