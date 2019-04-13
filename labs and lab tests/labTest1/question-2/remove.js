const fs = require('fs')
const path = require('path')


var txtFolder = './Files';
let remove = function () {
   fs.readdir(txtFolder, (err, files) => {
       if (err) throw err;
       for (const file of files) {
           fs.unlink(path.join(txtFolder, file), err => {
           if (err) throw err;
           console.log(`deleting files...${file}`)
       })
       }
   })
}
remove()