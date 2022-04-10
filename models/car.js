const mongoose = require('mongoose');

const carModel = mongoose.Schema({
  brand: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  year: {
  	type: Number,
    required: '{PATH} is required!',
  },
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Client' 
  },  
  repairs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Repair" }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Car', carModel);