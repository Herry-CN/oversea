const express = require('express');
const AdminUser = require('../models/AdminUser');
const bcrypt = require('bcryptjs');
const router = express.Router();

// 登录
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await AdminUser.findOne({ where: { username } });
  if (!user) return res.status(401).json({ error: '用户不存在' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: '密码错误' });
  res.json({ success: true, user: { id: user.id, username: user.username } });
});

// 新建后台用户（仅首次初始化用）
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await AdminUser.create({ username, password: hash });
  res.json(user);
});

module.exports = router; 