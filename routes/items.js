
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

router.post('/', auth, async (req, res) => {
  const item = new Item({ ...req.body, seller: req.user.id });
  await item.save();
  res.status(201).json(item);
});

module.exports = router;
