const filterFiles = require('./newModule');

const dir = process.argv[2];
const ext = process.argv[3];
filterFiles(dir, ext, (err, data) => {
  if (err) {
    console.log(err);
  }
  data.forEach((element) => {
    console.log(element);
  });
});
