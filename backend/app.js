const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./models');

const serviceRoutes = require('./routes/service');
const newsRoutes = require('./routes/news');
const inquiryRoutes = require('./routes/inquiry');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/services', serviceRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/admin', adminRoutes);

// 启动数据库并监听端口
const PORT = 3001;
(async () => {
  await sequelize.sync({ alter: true });
  app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
  });
})(); 