const express = require('express');
const app = express();
//middlewarre
app.use(express.static('public'));
app.set('viewengine','ejs');

app.get('/',(req,res) =>{
    res.render('home');
})

app.get('/products/:id',(req,res)=>{
 console.log(req.params.id);
    var data = [
        {
            id :1,
            productname : 'angular'
        }
    ]
    var result;
    data.forEach((product)=>{
        if (product.id == req.params.id){
            result=product;
            return true;
        }
    }
    )
    console.log(result);
})
app.listen(3000);