/*Make necessary requires*/
const express = require( 'express' )
const pug = require( 'pug' )
let app = express()
let db = require( __dirname + '/modules/database' )

/*Set the port*/
const port = 9090

/*Specify the template engine*/
app.set('view engine', 'pug')
app.set('views', './views') //This defaults to the views directory in the application root directory
//Use a public folder
app.use( express.static(__dirname + '/public'))


//GET request for index
app.get('/', function (req, res) {
  res.render('index', { title: 'Home Sweet Home', message: 'The sweetest deals on your new home!' })
})



/*Shoot the server*/
app.listen( port, function () {
  console.log( 'Application listening on port ' + port + '!' )
})
