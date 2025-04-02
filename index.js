require('dotenv').config()
const express = require('express')
const app = express()
const port = 3173

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ananta' , (req, res) => {
    res.send("<h1>Heyy there  , I am Ananta</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//for production level we have to hide some private data or some data that should not be shared.
//so We have to use dotenv (.env)
