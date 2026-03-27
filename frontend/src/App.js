import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Home from './pages/Home';
import Services from './pages/Services';
import News from './pages/News';
import Inquiry from './pages/Inquiry';
import Admin from './pages/Admin';
import CustomerProfile from './pages/CustomerProfile';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="services" icon={<AppstoreOutlined />}>
            <Link to="/services">出海服务</Link>
          </Menu.Item>
          <Menu.Item key="news" icon={<FileTextOutlined />}>
            <Link to="/news">新闻资讯</Link>
          </Menu.Item>
          <Menu.Item key="inquiry" icon={<MessageOutlined />}>
            <Link to="/inquiry">咨询表单</Link>
          </Menu.Item>
          <Menu.Item key="admin" icon={<UserOutlined />} style={{ float: 'right' }}>
            <Link to="/admin">后台管理</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px', background: '#fff', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2024 善策出海服务平台
      </Footer>
    </Layout>
  </Router>
);

export default App; 
