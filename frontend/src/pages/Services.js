import React, { useEffect, useState } from 'react';
import { List, Typography, Card, Row, Col } from 'antd';
import { AppstoreOutlined, BuildOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const serviceIcons = [
  <AppstoreOutlined style={{ fontSize: 32, color: '#1890ff' }} />, // 公司注册
  <BuildOutlined style={{ fontSize: 32, color: '#52c41a' }} />,   // 海外建厂
  <SafetyCertificateOutlined style={{ fontSize: 32, color: '#faad14' }} /> // 产品认证
];

const serviceDetails = [
  '提供美国、英国、新加坡、香港等地公司注册服务，快速合规，支持多币种账户开设。',
  '协助企业在越南、泰国、印尼等地设立生产基地，选址、建厂、用工一站式解决。',
  '办理CE、FDA、UL等国际认证，助力产品顺利进入欧美及全球市场。',
];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services').then(res => setServices(res.data));
  }, []);

  return (
    <div>
      <Title level={2}>出海服务介绍</Title>
      <Row gutter={24}>
        {services.map((item, i) => (
          <Col span={8} key={item.id} style={{ marginBottom: 24 }}>
            <Card hoverable style={{ minHeight: 220 }}>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>{serviceIcons[i % serviceIcons.length]}</div>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{serviceDetails[i % serviceDetails.length]}</Paragraph>
              <Paragraph type="secondary" style={{ fontSize: 13 }}>{item.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services; 