const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const axios = require('axios');

connectToMongo();
 
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/contest', async (req, res) => {
  try {
    let date = new Date().toJSON();
    let pre = date.slice(0, date.indexOf("T"));
    let start = `${pre}T00:00:00.000Z`;
    let end = `${pre}T23:59:59.000Z`;
    const response = await axios.get(`https://clist.by/api/v3/json/contest/?username=dasa&api_key=177e9ec3cf904e808fa10c231253f58345c91b9e&start__gt=${start}&end__lt=${end}`);
    res.send(response.data.objects);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/quest',require('./routes/quest'))


app.listen(port, () => {
  console.log(`CP QUEST listening on port ${port}`)
})