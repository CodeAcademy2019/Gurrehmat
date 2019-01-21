const fs = require('fs');

const filePath = process.argv[2];
const extension = `.${process.argv[3]}`;

const filteration = (list, ext) => list.filter(fileName => fileName.endsWith(ext));

const printList = (list) => {
  list.forEach(item => console.log(item));
};

const lsF = (path, ext, callback) => {
  fs.readdir(path, (err, list) => {
    if (err) {
      console.log(err.message);
    }
    const filtered = filteration(list, ext);
    callback(filtered);
  });
};

// lsF(filePath, extension, printList);

module.exports = { filteration, printList, lsF };
// const listFiles = fs.readdir(filePath, (err, list) => {
//   if (err) {
//     console.log(err.message);
//     return err;
//   } else {
//     const filteredList = list.filter(fileName, fileName => fileName.endsWith(extension));
//     return filteredList;
//   }
// });

// listFiles()
