const express = require('express');
const Inquiry = require('../models/Inquiry');
const router = express.Router();

// 提交咨询
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const inquiry = await Inquiry.create({ name, email, phone, message });
  res.json(inquiry);
});

// 获取所有咨询（后台用）
router.get('/', async (req, res) => {
  const inquiries = await Inquiry.findAll({ order: [['createdAt', 'DESC']] });
  res.json(inquiries);
});

module.exports = router; 