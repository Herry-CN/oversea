const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Inquiry = sequelize.define('Inquiry', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  type: { type: DataTypes.STRING, allowNull: false }, // 咨询类型（单选）
  tags: { type: DataTypes.STRING }, // 详细需求（多选，逗号分隔）
  message: { type: DataTypes.TEXT, allowNull: false }, // 问题描述
  name: { type: DataTypes.STRING, allowNull: false }, // 姓名
  company: { type: DataTypes.STRING, allowNull: false }, // 公司
  phone: { type: DataTypes.STRING, allowNull: false }, // 手机号
  email: { type: DataTypes.STRING, allowNull: false }, // 邮箱
  jobTitle: { type: DataTypes.STRING, allowNull: false }, // 职位
}, {
  tableName: 'inquiries',
  timestamps: true,
});

module.exports = Inquiry; 