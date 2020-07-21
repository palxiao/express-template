const jwt = require('jwt-simple')

module.exports = {
    getToken(id: number) {

        const payload = {
            iss: id,
            exp: Date.now() + 7 * 24 * 60 * 60 * 1000
        }
        return jwt.encode(payload, 'jwtTokenSecret');
    }
}
export { }