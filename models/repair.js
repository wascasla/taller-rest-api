const mongoose = require('mongoose');

const repairModel = mongoose.Schema({
  description: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  car: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Car' 
  },
  date: { type: Date, required: '{PATH} is required!'},
}, {
  timestamps: true
});

module.exports = mongoose.model('Repair', repairModel);