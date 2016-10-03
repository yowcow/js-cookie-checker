const PORT = 5000

var cookieSession = require('cookie-session')
var express       = require('express')

var app = express()

app.use(cookieSession({
    name: 'check-cookie',
    keys: ['6cc22fd16902f2b8995144af09a6e1557e21bab2']
}))

app.get('/store', (req, res) => {
    var token = req.query.token || ''
    req.session.token = token
    res.send('OK')
})

app.get('/check', (req, res) => {
    token = req.session.token || ''
    res.send('callback("' + token + '");')
})

var server = app.listen(PORT)

module.exports = server
