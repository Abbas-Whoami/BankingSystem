const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://abbas:Abbas@22@cluster0.typoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { 'useNewUrlParser': true, 'useFindAndModify': false, 'useUnifiedTopology': true, 'useCreateIndex': true }, (err) => {
    if (err) return console.log(err)
    console.log('[mongoose service ... OK]')
})