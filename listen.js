const app = require("./app");
const { PORT = 9090 } = process.env;
app.listen(port, (error) => {
  if (error) {
    console.log("ERROR", error);
  } else {
    console.log(`listening on port ${port}`);
  }
});
