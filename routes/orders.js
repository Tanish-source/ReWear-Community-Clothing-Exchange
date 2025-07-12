
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const order = new Order({ ...req.body, buyer: req.user.id });
  await order.save();
  res.status(201).json(order);
});

router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ buyer: req.user.id });
  res.json(orders);
});

module.exports = router;
