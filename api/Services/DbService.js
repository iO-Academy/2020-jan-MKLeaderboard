const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const Client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

function getDbConn(callback) {

    Client.connect((err) => {
        console.log('Connected to mongodb');
        let db = Client.db('academy-mario-kart');
        console.log('Connected to academy-mario-kart');
        callback(db);
    });

}

module.exports.getDbConn = getDbConn;