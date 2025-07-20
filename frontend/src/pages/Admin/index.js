import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  FileTextOutlined,
  MessageOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import AdminLogin from './Login';
import AdminServices from './Services';
import AdminNews from './News';
import AdminInquiries from './Inquiries';

const { Sider, Content } = Layout;

const Admin = () => {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('adminUser');
    return u ? JSON.parse(u) : null;
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    setUser(null);
    navigate('/admin/login');
  };

  if (!user) {
    return <Routes>
      <Route path="/login" element={<AdminLogin onLogin={setUser} />} />
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>;
  }

  return (
    <Layout style={{ minHeight: '80vh', background: '#fff' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu mode="inline" defaultSelectedKeys={['services']} style={{ height: '100%' }}>
          <Menu.Item key="services" icon={<AppstoreOutlined />} onClick={() => navigate('/admin/services')}>服务管理</Menu.Item>
          <Menu.Item key="news" icon={<FileTextOutlined />} onClick={() => navigate('/admin/news')}>新闻管理</Menu.Item>
          <Menu.Item key="inquiries" icon={<MessageOutlined />} onClick={() => navigate('/admin/inquiries')}>咨询管理</Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>退出登录</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: 24 }}>
          <Routes>
            <Route path="/services" element={<AdminServices />} />
            <Route path="/news" element={<AdminNews />} />
            <Route path="/inquiries" element={<AdminInquiries />} />
            <Route path="*" element={<Navigate to="/admin/services" />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin; 