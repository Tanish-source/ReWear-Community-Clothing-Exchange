
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  status: { type: String, default: 'pending' },
  total: Number
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
