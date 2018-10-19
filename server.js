const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;


require('./hbs/helpers/helpers');

// Instruccion para poner una carpeta para el uso publico
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Juan RoberASDto'
    });
    // res.send('Hola mundo')
});
app.get('/about', (req, res) => {
    res.render('about.hbs');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones e el puerto ${ port }`);

})