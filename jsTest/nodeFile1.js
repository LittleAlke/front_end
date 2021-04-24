const fs = require("fs");
let path = "F:/Test/image/iu.jpg"

fs.readFile("../image/iu.jpg",function (err, data) {
  if(!err){
    console.log(data);
    fs.writeFile("iu2.jpg",data,function () {
      if(!err){
        console.log("文件写入成功");
      }
    })
  }

})
