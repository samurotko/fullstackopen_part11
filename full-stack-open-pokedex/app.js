require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
var server_port =  5000
var server_host = process.env.MY_HOST || '0.0.0.0'

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})
//server_host, proc worker: node app.js -p $PORT

app.listen(server_port, server_host,() => {
  console.log('server started on port:', server_port)
  console.log('process',process.env)
})
