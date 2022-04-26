const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/kiuf', {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(console.log('MongoDB connected'))
.catch((err) => console.log(err))