const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`The app is listening on http://localhost:${port}`);
});
