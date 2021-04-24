const fs = require('fs');

//创建一个可读流 
// let rs = fs.createReadStream("iu2.jpg")
let rs = fs.createReadStream("../source/Celebrity.mp3")
// 创建一个可写流
let ws = fs.createWriteStream("celebrity3.mp3")
// pipe（）可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws)


// 监听流的开启和关闭
rs.once("open",function () {
  console.log("可读流打开了~~~");
})

rs.once("close",function () {
  console.log("可读流关闭了~~~");
  ws.end
})

ws.once("open",function () {
  console.log("可写流打开了~~~");
})

ws.once("close",function () {
  console.log("可写流关闭了~~~");
})


