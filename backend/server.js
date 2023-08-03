// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 5040;

// app.use(cors());
// app.use(express.json())

// app.get('/contest', async (req, res) => {
//   try {
//     const response = await axios.get('https://clist.by/api/v3/json/contest/?username=dasa&api_key=177e9ec3cf904e808fa10c231253f58345c91b9e');
//     console.log(response.data.objects);
//     res.json(response.objects);
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
