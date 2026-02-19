const res = await request(app).get("/api/articles/2/comments");
console.log(res.body);
