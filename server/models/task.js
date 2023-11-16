let mongoose = require('mongoose');

// create task model
let taskmodel = mongoose.Schema({
    tasks: String,
    day: String,
    time: String
    },
    {
        collection: "task"
    }
);
module.exports = mongoose.model('task', taskmodel);
//password : DFNSCHECxQMkIIje