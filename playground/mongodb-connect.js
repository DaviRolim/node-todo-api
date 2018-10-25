const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Study and learn forever!',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    db.collection('Users').insertOne({
       name: 'Davi',
       age: 23,
       location: 'Brasil' 
    }, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log(result.ops);
        
    })
    
    client.close()
})