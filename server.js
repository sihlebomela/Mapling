const express = require('express');
const app = express();
const port = 8080;


app.get('./public', (req, res) => {
    res.send('Hello world');
    res.end();
})
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening on port ${port}`)
})

app.use(express.static('public'));