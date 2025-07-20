const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const News = sequelize.define('News', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  cover: { type: DataTypes.STRING },
  publishedAt: { type: DataTypes.DATE, allowNull: false },
}, {
  tableName: 'news',
  timestamps: true,
});

module.exports = News; 