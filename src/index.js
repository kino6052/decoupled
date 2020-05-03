var fs = require("fs");
var path = require("path");
var getCommandLineArguments = function () {
    process.argv.forEach(function (val, index) {
        console.log(index + ": " + val);
    });
};
var createDirectory = function (directoryName, root) {
    var dir = path.join(__dirname, "./" + directoryName);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.writeFileSync(path.join(dir, "./feature.ts"), "test");
    }
};
var parseConfig = function () {
    var rawdata = fs
        .readFileSync(path.join(__dirname, "./config.json"))
        .toString();
    var data = JSON.parse(rawdata);
};
createDirectory("./test");
// getCommandLineArguments();
// parseConfig();
