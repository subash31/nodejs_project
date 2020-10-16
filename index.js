const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require("cors");
const { text } = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));
 app.set('viewengine','jade');

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
app.use(cors());

// MongoConnection
let client;
MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, function(err, database) {
    if(err) throw err;

    client = database;

    // app.listen(port, ip, function () {
    //     console.log('Server is running on Port: ' + port);
    // });
});

process.on('SIGINT', function() {
    client.close({}, function () {
        console.log('MongoDB disconnected on app termination');
        process.exit(0);
    });
});


app.get('/mytext',function (req,res) {
    // query
res.render('home');
   var text = req.query.comment;
   console.log(text);
})

 app.post(text, function(req, res)  {
    // POST - Body
    console.log(req.body.comment);
    const {texts} = text;
    const collection = client.db("dbuser").collection("dbuser2");
    collection.inserOne({texts});
    
});

app.listen(port);
