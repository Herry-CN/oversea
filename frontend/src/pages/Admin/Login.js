import React, { useState } from 'react';
import { Form, Input, Button, Typography, message, Card } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const AdminLogin = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log('提交表单数据:', values); // 加这个
    setLoading(true);
    try {
      const res = await axios.post('/api/admin/login', values);
      localStorage.setItem('adminUser', JSON.stringify(res.data.user));
      onLogin(res.data.user);
      message.success('登录成功');
    } catch (e) {
      message.error(e.response?.data?.error || '登录失败');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 350, margin: '60px auto' }}>
      <Card>
        <Title level={3} style={{ textAlign: 'center' }}>后台登录</Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{ username: '', password: '' }}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input autoComplete="new-username" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin; 