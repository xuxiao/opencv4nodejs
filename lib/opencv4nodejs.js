const path = require('path');

let cv;
if (process.env.BINDINGS_DEBUG) {
  cv = require('../build/Debug/opencv4nodejs');
} else {
  cv = require('../build/Release/opencv4nodejs');
}

const { resolvePath } = require('./utils');
const promisify = require('./promisify');

// resolve haarcascade files
const { haarCascades } = cv;
Object.keys(haarCascades).forEach(
  key => cv[key] = resolvePath(path.join(__dirname, './haarcascades'), haarCascades[key]));


// promisify async methods
cv = promisify(cv);

module.exports = cv;