const express = require('express');
const app = express()

app.get('/', (req, res) => {
  console.log('its working!')
  res.send({ hi: 'there' })
})

const PORT = process.env.PORT

app.listen(5000)