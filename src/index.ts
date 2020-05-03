import * as fs from "fs";
import * as path from "path";

const getCommandLineArguments = () => {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
};

const createDirectory = (directoryName: string) => {
  var dir = path.join(__dirname, `./${directoryName}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.writeFileSync(path.join(dir, "./feature.ts"), "test");
  }
};

const createFile = (
  dir: string,
  name: string,
  extension: string,
  content: string
) => {
  if (!fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, `./${name}.${extension}`), content);
  }
};

const parseConfig = () => {
  let rawdata = fs
    .readFileSync(path.join(__dirname, "./config.json"))
    .toString();
  let data = JSON.parse(rawdata);
};

const getListOfFiles = (dir: string) => {
  console.warn(fs.readdirSync(dir));
};

export const test = () => getListOfFiles(path.join(__dirname));
// createDirectory("./test");
// getCommandLineArguments();
// parseConfig();
