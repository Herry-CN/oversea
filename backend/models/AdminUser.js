const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const AdminUser = sequelize.define('AdminUser', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'admin_users',
  timestamps: true,
});

module.exports = AdminUser; 