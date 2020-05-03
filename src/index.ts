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

const readFile = (pathToFile: string) => fs.readFileSync(pathToFile).toString();

const getListOfFiles = (dir: string) => fs.readdirSync(dir);

const getListOfFeatures = (pathToFeatures: string) =>
  getListOfFiles(pathToFeatures);

const getInterface = (dir: string) => {
  const content = readFile(path.join(dir, "./interface.ts"));
  return content;
};

export const parseInterface = (content: string) => {
  // Match Interface: interface \w+ {\s+(\w+: [\(\):A-Za-z =>]+;\s+)+}\sg
  // Match Method: (\w+): \(([:A-Za-z =>\(\){}]*)\) => void;\mg
  const result = [];
  const _interface = content.match(
    /interface \w+ {\s+(\w+: [\(\):A-Za-z =>]+;\s+)+}/gs
  );
  const _methods = _interface[0].match(
    /(\w+): \(([:A-Za-z =>\(\){}]*)\) => void;/gm
  );
  for (let method of _methods) {
    const t = method.match(/(\w+): \(([:A-Za-z =>\(\){}]*)\) => void;/i);
    result.push(t[1]);
  }
  return result;
};

export const test = () => {
  const featurePath = path.join(__dirname, "features");
  const features = getListOfFeatures(featurePath);
  const result = [];
  for (let feature of features) {
    const test = getInterface(path.join(featurePath, feature));
    const i = parseInterface(test);
    result.push([feature, i]);
  }
  console.warn(result);
};
// createDirectory("./test");
// getCommandLineArguments();
// parseConfig();
