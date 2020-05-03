import * as fs from "fs";
import * as path from "path";

const getCommandLineArguments = () => {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
};

const createDirectory = (directoryName: string, root?: string) => {
  var dir = path.join(__dirname, `./${directoryName}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.writeFileSync(path.join(dir, "./feature.ts"), "test");
  }
};

const parseConfig = () => {
  let rawdata = fs
    .readFileSync(path.join(__dirname, "./config.json"))
    .toString();
  let data = JSON.parse(rawdata);
};

createDirectory("./test");
// getCommandLineArguments();
// parseConfig();
