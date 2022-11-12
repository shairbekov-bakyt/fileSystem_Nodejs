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

const readFileAsync = async (fileName) => {
  return new Promise((resolve, reject) =>
    fs.readFile(
      path.resolve(`${prefixTest}${fileName}`),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }
    )
  );
};

writeFileAsync("test.txt", "five5.joke")
  .then(() => appendFileAsync("test.txt", "appended"))
  .then(() => appendFileAsync("test.txt", "apppended"))
  .then(() => readFileAsync("test.txt"))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
