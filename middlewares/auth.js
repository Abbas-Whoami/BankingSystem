
module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if (!token) return res.status(401).json({ msg: 'Please, set on header request your token access aquired on /auth route' })

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }

    req.decoded = decoded
    console.log(req.decoded)
    next()
}