require ('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Abdullah!')
})

app.get('/twitter',(req,res)=>{
    res.send('Abdullahdotcom')
});

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai Aur Code</h1>')
});

app.get('/youtube', (req,res)=>{
    res.send('<h2>Chai aur Backend..</h2>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});
