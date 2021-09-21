const fs = require('fs')
//异步IO
//fs.readFile
const data = fs.readFile('./conf.js', (error,data)=>{
    if(err)throw err;
    console.log(data.toString())
})

//同步读取 二进制文件 图片视频
const data = fs.readFileSync
console.log(data.toString())
//promise api async/await
(async()=>{
    const fs = requre('fs')
    const{promisify} =require("util")
    const readFile = promisify(fs.readFile)
    const data = await readFile('./conf.js')
    console.log(data.toString())
})()
