const express = require("express");
const exphbs = require("express-handlebars");
// const mongoose = require('mongoose')
const app = express();

// // Map global promise - get rid of warning
// mongoose.Promise = global.Promise;
// //Connect to mongoose
// mongoose.connect('mongodb://localhost:27017/vidjot-dev', {
//     useNewUrlParser: true
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// //Load Idea Model
// require('./models/Idea');
// const Idea = mongoose.model('ideas');



// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Index Route
app.get('/', (req, res)=>{
    res.render('index');
});

//about route
app.get('/about', (req, res)=> {
    res.render('about');
});

// Add Idea Form 
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
});


const port = 5000;

app.listen(port, () =>{
    console.log(`server started on port ${port}`);
});