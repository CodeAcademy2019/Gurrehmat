const fs = require('fs');

const path = require('path');

const filterExt = (list, ext) => list.filter(element => path.extname(element) === `.${ext}`);
const filterLs = (filePath, ext, callback) => {
  fs.readdir(filePath, (err, list) => {
    if (err) {
      return callback(err);
    }
    return callback(null, filterExt(list, ext));
  });
};
module.exports = filterLs;
