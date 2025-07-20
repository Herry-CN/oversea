const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Inquiry = sequelize.define('Inquiry', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  message: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: 'inquiries',
  timestamps: true,
});

module.exports = Inquiry; 