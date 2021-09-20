const Account = require('../../models/account-model')

module.exports.findByAccount = async(req, res) => {
    if (req.body) {
        if(!req.body.email) res.status(204).json({ msg: 'Please enter a valid email address.' })
        Account.find({ email: `${req.body.email}`}).then((account) => {
            if (req.body.password === account[0].password) {
                res.status(200).json({
                    id: account[0]._id,
                    account: account[0].account,
                    owner: account[0].owner,
                    value: 'R$ ' + account[0].value,
                    admin: account[0].admin
                })
            } else {
                res.status(403).json({ msg: 'incorrect password' })
            }
        })
    } else {
        res.status(204).json({ msg: 'Body invalid' })
    }
}
