const app = require("./index");

const connect = require("./config/db");
const port = process.env.PORT || 7559;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening on port 7559...");
  } catch (err) {
    console.log(err.message);
  }
});
