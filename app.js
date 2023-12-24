require('dotenv').config();

const express = require('express');

const expressLayout = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// static files
app.use(express.static('public'));

// setting template engine 
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));


// Handle 404 Error
app.get('*', function(res, req) {
    //res.status(404).send('404 Page Not Found.')
    res.status(404).render('404');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})