const docxConverter = require('docx-pdf');

const path = require('path');
const fs = require('fs')


const glob = require("glob");
let fileArr;
const Output_src = path.join(__dirname, "/")
console.log(Output_src);
const src = path.join(__dirname, "/test")

var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};
getDirectories('test', function (err, res) {
  if (err) {
    console.log('Error', err);
  } else {
        console.log(res)
        res.forEach((file) => {
            if (file.includes("docx")){    
              let filenameArr = file.split('/');
              let filename = `${filenameArr[filenameArr.length-2]}-${filenameArr.pop()}`
              const dst =  `Output/${filename}.pdf`;
              docxConverter(file, dst, (err, result) => {
                  if (err) console.log(err);
                  else console.log(result); // writes to file for us
              });
            } 
        })
    }
});

// 