const express = require('express');
const News = require('../models/News');
const router = express.Router();

// 获取所有新闻
router.get('/', async (req, res) => {
  const news = await News.findAll({ order: [['publishedAt', 'DESC']] });
  res.json(news);
});

// 新建新闻（后台用）
router.post('/', async (req, res) => {
  const { title, content, cover, publishedAt } = req.body;
  const news = await News.create({ title, content, cover, publishedAt });
  res.json(news);
});

// 删除新闻（后台用）
router.delete('/:id', async (req, res) => {
  await News.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = router; 