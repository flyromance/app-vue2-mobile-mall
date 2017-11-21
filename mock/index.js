// node --max_old_space_size=8000 


var express = require('express')
var app = express()
var data = require('./data')
var port = process.env.PORT || 9090
var apiRoutes = express.Router()

apiRoutes.get('/seller', function (req, res) {
    res.json({
        errno: 0,
        msg: 'success',
        data: data.seller
    })
})

apiRoutes.get('/ratings', function (req, res) {
    res.json({
        errno: 0,
        msg: 'success',
        data: data.ratings
    })
})

apiRoutes.get('/goods', function (req, res) {
    res.json({
        errno: 0,
        msg: 'success',
        data: data.goods
    })
})

app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log(`mock server listen on ${port} ...`)
})
