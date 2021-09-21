//异步调用 完成以后干点啥
//js callback generator async/await eventEmitter发布订阅
(async ()=>{
    const {MongoClient} = require('mongodb')

    const client = new MongoClient(
        'mongodb://localhost:27017',
        {
            useNewUrlParser:true
        }
    )

    let ret = await client.connect()
    const db = client.db('test')

    const fruits = db.collection('fruits')
    ret = await fruits.insertOne({
        name:'mango',
        price: 3.6
    })
    console.log('insert:', ret)

    const posts = db.collection('Beauty')
    ret = await posts.insertMany([
         {
            item: 'Miss.Dior',
            brand: 'Dior',
            category: 'Fragrance',
            date: Date()
        },
        {
            item: 'Anti-Wrinkle cream',
            brand: 'Neutrogena',
            category: 'Skincare',
            date: Date()
        },
        {
            item: 'Highlight glow',
            brand: 'MakeupForever',
            category: 'Makeup',
            date: Date()
        }
    ])
    console.log('insert:', ret)    
})()