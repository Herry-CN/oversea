const sequelize = require('./models');
const Service = require('./models/Service');
const News = require('./models/News');
const AdminUser = require('./models/AdminUser');
const bcrypt = require('bcryptjs');

async function seed() {
  await sequelize.sync({ force: true });

  await Service.bulkCreate([
    { title: '公司注册', description: '为您提供全球主要国家公司注册服务。', icon: 'company' },
    { title: '海外建厂', description: '协助企业在海外设立生产基地。', icon: 'factory' },
    { title: '产品认证', description: '办理CE、FDA等国际认证。', icon: 'certificate' },
  ]);

  await News.bulkCreate([
    { title: '2024年海外投资趋势', content: '2024年海外投资持续升温...', cover: '', publishedAt: new Date() },
    { title: '公司注册流程详解', content: '注册海外公司需要哪些步骤？...', cover: '', publishedAt: new Date() },
  ]);

  const password = await bcrypt.hash('admin123', 10);
  await AdminUser.create({ username: 'admin', password });

  console.log('示例数据已插入');
  process.exit(0);
}

seed(); 