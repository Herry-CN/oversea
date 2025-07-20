const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Service = sequelize.define('Service', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  icon: { type: DataTypes.STRING },
}, {
  tableName: 'services',
  timestamps: true,
});

module.exports = Service; 