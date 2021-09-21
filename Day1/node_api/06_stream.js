const fs = require('fs')
const rs = fs.createReadStream('./kuromi.jpg')
const ws = fs.createWriteStream('./kuromi2.jpg')
rs.pipe(ws)