const express = require('express');

const app = express();
app.use(express.static('./src/server/static'));

app.listen(3009, () => {
    console.log('Server is running on http://localhost:3009')
});