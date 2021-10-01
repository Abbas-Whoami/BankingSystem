const mongoose = require('mongoose')

mongoose.connect("<mongoDB>", { 'useNewUrlParser': true, 'useFindAndModify': false, 'useUnifiedTopology': true, 'useCreateIndex': true }, (err) => {
    if (err) return console.log(err)
    console.log('[mongoose service ... OK]')
})
