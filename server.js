const path = require("path");
const prefixTest = "test_";
const fs = require("fs");

const writeFileAsync = async (fileName, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path.resolve(`${prefixTest}${fileName}`), data, (err) => {
      if (err) {
        return reject(err.message);
      }
      return resolve();
    })
  );
};

const appendFileAsync = async (fileName, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path.resolve(`${prefixTest}${fileName}`), data, (err) => {
      if (err) {
        return reject(err.message);
      }
      return resolve();
    })
  );
};

writeFileAsync("test.txt", "five5.joke")
  .then(() => appendFileAsync("test.txt", "appended"))
  .then(() => appendFileAsync("test.txt", "apppended"))
  .catch((err) => console.log(err));
