const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

app.get("/", (req, res, next) => {
    console.log(req.method, req.url)
    res.json(require('./info.json'))
});


app.listen(port, () => console.log(`click http://localhost:${port}/`))
