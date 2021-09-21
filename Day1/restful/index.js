//[user, order]
// api/user/GET
// api/user/1 Get
// api/users POST PUT DELETE

//反向工厂 代码生成器
//动态变成 1.根据模型文件 自动加载模型
     //   2. 自动产生路由器 --注册通配路由器
const Koa = require('koa')
const app = new Koa()


const config = require('./conf.js')
const {loadModel} = require('./framework/loader.js')
loadModel(config)(app)

const bodyParser = require('koa-bodyparser')
app.user(bodyParser())
const restful = require('./framework/router')
app.use(restful)

app.listen(3000, ()=>{
    console.log('server at 3000')
})