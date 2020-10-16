
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";
// const uri = "mongodb+srv://subash31:subash31@cluster0.dfgym.mongodb.net/subash31?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true },);
client.connect(err => {
  const collection = client.db("dbuser").collection("dbuser2");
  console.log('connected');
  console.log(collection);
  // perform actions on the collection objects
  client.close();
});


