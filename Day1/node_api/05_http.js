const { fstat } = require('fs')
const http = require('http')
http.createServer((request, response, headers)=>{
    console.log('a request', getPrototypeChain(response))
    //TODO 流request response
    response.end('hi node')
    const {url, method} = request
    if(url === '/' && method === 'GET'){
        fs.readFile('index.html', (err,data)=>{
            if(err){
                response.writeHead(500, {
                        'Content-Type':'text/plain;charset = utf-8'
                } )
                response.end('500 服务器挂了')
                return
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })
    }else if(url === '/users'&& method ==='GET'){
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify({name:'tom'}))
    } else if (method ==='GET'&& headers.accept.indexOf('image/*')){
        //所有图片
        
    }else{
            response.statusCode = 400
            response.setHeader('Content-Type','text/plain;charset = utf-8')
            response.end('404 没有这个')
     }
    })
.listen(3000,()=>{
    console.log('Server at 3000')
})
//跨域 cookie session  服务器浏览器端 prewrite
function getPrototypeChain(obj){
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)){
        protoChain.push(obj)
    }
    return protoChain
}