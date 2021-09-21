const http = require('http')
//cookie要记什么东西都能记得住 容易被观察到也容易被篡改 不能够存太多的东西
const session = {}
http.createServer((req, res)=>{
    console.log('cookie:' ,req.headers.cookie)
    res.setHeader('Set-Cookie', 'abc =123')
    res.end('Hello')
})

.listen(3000)