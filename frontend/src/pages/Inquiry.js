import React, { useState } from 'react';
import { Typography, Form, Input, Button, message, Card, Row, Col } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const Inquiry = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // 使用 form 实例

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('/api/inquiries', values);
      message.success('提交成功，我们会尽快联系您！');
      form.resetFields(); // 成功后清空表单
    } catch {
      message.error('提交失败，请稍后重试');
    }
    setLoading(false);
  };

  return (
    <Row gutter={32}>
      <Col span={12}>
        <Card>
          <Title level={2}>咨询表单</Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              name: '',
              email: '',
              phone: '',
              message: '',
            }}
          >
            <Form.Item
              name="name"
              label="姓名"
              rules={[{ required: true, message: '请输入姓名' }]}
            >
              <Input autoComplete="new-name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="邮箱"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' },
              ]}
            >
              <Input autoComplete="new-email" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="电话"
            >
              <Input autoComplete="new-phone" />
            </Form.Item>

            <Form.Item
              name="message"
              label="咨询内容"
              rules={[{ required: true, message: '请输入内容' }]}
            >
              <Input.TextArea rows={4} autoComplete="new-message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Title level={3}>联系我们</Title>
          <Paragraph>
            地址：深圳市南山区科技园创新大厦A座18楼<br />
            电话：400-888-8888<br />
            邮箱：contact@oversea.com<br />
            工作时间：周一至周五 9:00-18:00
          </Paragraph>
          <div
            style={{
              width: '100%',
              height: 220,
              background: '#f0f0f0',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aaa',
            }}
          >
            [地图占位，可嵌入高德/百度/Google地图]
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Inquiry;
