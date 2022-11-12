const dotenv = require("dotenv");
const path = require("path");
const basePath = path.resolve(__dirname);

dotenv.config();

const baseUrl =
  "http://localhost:8000/users/?id=53&username=Bakyt&password=admin123445";

const urlData = new URL(baseUrl);

console.log(urlData);
