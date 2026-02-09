const db = require("../db/connection");
const request = require("supertest");
const app = require("../app");
const data = require("../db/data/test-data/index");
const seed = require("../db/seeds/seed");
require("jest-extended");
require("jest-sorted");

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

describe("GET /api/users", () => {
  test("gives status 200", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.users)).toBe(true);
  });
  test("gives an array", async () => {
    const response = await request(app).get("/api/users");
    expect(Array.isArray(response.body.users)).toBe(true);
  });
  test("each user contains username, name, avatar_url keys", async () => {
    const response = await request(app).get("/api/users");
    const users = response.body.users;
    users.forEach((user) => {
      expect(user.username).toBeString();
      expect(user.name).toBeString();
      expect(user.avatar_url).toBeString();
    });
  });
});

describe("GET /api/articles/:article_id", () => {
  test("gives status 200", async () => {
    const response = await request(app).get("/api/articles/5");
    expect(response.statusCode).toBe(200);
    expect(typeof response.body.article).toBe("object");
  });
  test("article contains title, topic, author, body, created_at, votes, article_img_url keys", async () => {
    const response = await request(app).get("/api/articles/5");
    const article = response.body.article;
    expect(article.title).toBeString();
    expect(article.topic).toBeString();
    expect(article.body).toBeString();
    expect(article.created_at).toBeString();
    expect(article.votes).toBeNumber();
    expect(article.article_img_url).toBeString();
  });
});

describe("GET /api/articles/:article_id/comments", () => {
  test("gives status 200", async () => {
    const response = await request(app).get("/api/articles/2/comments");
    expect(response.statusCode).toBe(200);
    expect(typeof response.body.comments).toBe("object");
    //expect(Array.isArray(response.body.users)).toBe(true);
  });
  test("comments contain comment_id, votes, created_at, author, body, article_id", async () => {
    const response = await request(app).get("/api/articles/2/comments");
    const comments = response.body.comments;
    comments.forEach((comment) => {
      expect(comment.comment_id).toBeString();
      expect(comment.votes).toBeString();
      expect(comment.created_at).toBeString();
      expect(comment.author).toBeString();
      expect(comment.body).toBeString();
      expect(comment.article_id).toBeString();
    });
  });
  test("comments are sorted by created_at", async () => {
    const response = await request(app).get("/api/articles/2/comments");
    const comments = response.body.comments;
    expect(comments).toBeSortedBy("created_at", { descending: true });
  });
});

describe("POST /api/articles/:article_id/comments", () => {
  test("gives status 201", async () => {
    const newComment = {
      username: "rogersop",
      body: "Best thing I've read in my life",
    };
    const userCheck = await db.query("SELECT username FROM users;");
    const response = await request(app)
      .post("/api/articles/5/comments")
      .send(newComment);
    expect(response.status).toBe(201);
  });
  test("posted comment has correct author and body and contains the keys comment_id, votes=0, created_at, article_id", async () => {
    const newComment = {
      username: "rogersop",
      body: "Best thing I've read in my life",
    };
    const response = await request(app)
      .post("/api/articles/5/comments")
      .send(newComment);
    expect(response.body.comment.author).toEqual("rogersop");
    expect(response.body.comment.body).toEqual(
      "Best thing I've read in my life",
    );
    expect(response.body.comment.votes).toBe(0);
    expect(response.body.comment.article_id).toBe(5);
    expect(typeof response.body.comment.created_at).toBe("string");
    console.log(response);
  });
});
