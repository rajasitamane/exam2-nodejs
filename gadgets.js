const mongoose = require('mongoose');

const gadgetsSchema = new mongoose.Schema(
    {    
        Yoo: { type: String, required: true },    
        Hoo: { type: Number, default: 10 }
    }
);

const gadgets = mongoose.model('gadgets',gadgetsSchema);

module.exports = gadgets;