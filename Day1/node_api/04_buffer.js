const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2)

const buf2 = Buffer.from('中')
console.log(buf3)//utf-8 uft-16 utf-32

const buf4 = Buffer.contact([buf2, buf3])
console.log(buf4,buf4.toString())