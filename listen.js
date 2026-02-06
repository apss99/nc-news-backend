const app = require("./app");
const port = 9643;
app.listen(port, (error) => {
  if (error) {
    console.log("ERROR", error);
  } else {
    console.log(`listening on port ${port}`);
  }
});
