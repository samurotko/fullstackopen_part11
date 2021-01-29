require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
var server_port = process.env.PORT || 5000
var server_host = process.env.MY_HOST || '0.0.0.0'

app.use(express.static('dist'))

// app.get('/health', (req, res) => {
//   res.send('ok')
// })

// app.get('/version', (req, res) => {
//   res.send('1') // change this string to ensure a new version deployed
// })

app.listen(server_port, '0.0.0.0', () => {
  console.log('server started on port:', process.env.PORT)
  console.log('process',process.env)
})
