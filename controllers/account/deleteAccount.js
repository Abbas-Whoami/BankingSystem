const Account = require('../../models/account-model')

module.exports = async(req, res) => {
    if (!req.body.account) res.send('Invalid body. Insufficient information')
    try {
        await Account.findOneAndDelete({ account: req.body.account })
        res.send('account deleted!')
    } catch (err) {
        res.send('err')
    }
}