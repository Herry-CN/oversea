const express = require('express');
const Inquiry = require('../models/Inquiry');
const router = express.Router();

// 提交咨询
router.post('/', async (req, res) => {
  const { name, email, phone, company, jobTitle, type, tags, message } = req.body;
  const inquiry = await Inquiry.create({ name, email, phone, company, jobTitle, type, tags, message });
  res.json(inquiry);
});

// 获取所有咨询（后台用）
router.get('/', async (req, res) => {
  const inquiries = await Inquiry.findAll({ order: [['createdAt', 'DESC']] });
  res.json(inquiries);
});

// 删除咨询
router.delete('/:id', async (req, res) => {
  await Inquiry.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = router; 