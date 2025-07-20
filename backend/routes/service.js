const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// 获取所有服务
router.get('/', async (req, res) => {
  const services = await Service.findAll();
  res.json(services);
});

// 新建服务（后台用）
router.post('/', async (req, res) => {
  const { title, description, icon } = req.body;
  const service = await Service.create({ title, description, icon });
  res.json(service);
});

// 删除服务（后台用）
router.delete('/:id', async (req, res) => {
  await Service.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = router; 