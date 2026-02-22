const app = require("./app");
const { PORT = 5432 } = process.env;

app.listen(PORT, (error) => {
  if (error) {
    console.log("ERROR", error);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
