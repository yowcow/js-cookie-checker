var assert  = require('assert')
var request = require('supertest')
var app     = require('../app')
var cookies

describe('loading express', () => {

    it('responds to / with 404', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .end(done)
    })

    it('responds to /session/store with 200', (done) => {
        request(app)
            .get('/session/store?token=hogefuga')
            .expect(200)
            .expect((res) => {
                cookies = res.header['set-cookie'].map((cookie) => {
                    return cookie.split(';')[0]
                }).join(';')
            })
            .end(done)
    })

    it('responds to /session/check with 200', (done) => {
        var req = request(app).get('/session/check')

        req.cookies = cookies

        req.expect(200)
            .expect((res) => {
                assert.equal(
                    res.text,
                    'callback("hogefuga");'
                )
            })
            .end(done)
    })
})
