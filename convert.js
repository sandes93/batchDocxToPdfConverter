const docxConverter = require('docx-pdf');

const path = require('path');
const fs = require('fs')
var promises_1 = require("fs").promises;




const src = path.join(__dirname, "/test")

fs.readdirSync(src).forEach((file) => {
    let filesrc = path.join(__dirname, `/test/${file}`)
    console.log(filesrc)
    if (filesrc.includes("docx")){
        const dst = path.join(__dirname, `${file}.pdf`);
        docxConverter(filesrc, dst, (err, result) => {
        if (err) console.log(err);
        else console.log(result); // writes to file for us
    });
    }
    
})

// const readFileContent = async (files) => {
//   return await Promise.all(
//     files.map( (file) => fs.readFile(file, 'utf8') )
//   );
// };

const glob = require("glob");


var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};
getDirectories('test', function (err, res) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(res);
  }
});

const fileArr = getDirectories(src)

console.log(fileArr)
