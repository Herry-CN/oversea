import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Divider, Image } from 'antd';
import { AppstoreOutlined, BuildOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const bannerUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';

const serviceIcons = [
  <AppstoreOutlined style={{ fontSize: 32, color: '#1890ff' }} />, // 公司注册
  <BuildOutlined style={{ fontSize: 32, color: '#52c41a' }} />,   // 海外建厂
  <SafetyCertificateOutlined style={{ fontSize: 32, color: '#faad14' }} /> // 产品认证
];

const Home = () => {
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/services').then(res => setServices(res.data.slice(0, 3)));
    axios.get('/api/news').then(res => setNews(res.data.slice(0, 2)));
  }, []);

  return (
    <div>
      {/* Banner */}
      <div style={{ position: 'relative', marginBottom: 32 }}>
        <Image src={bannerUrl} preview={false} style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 8 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 320, background: 'rgba(0,0,0,0.35)', borderRadius: 8 }} />
        <div style={{ position: 'absolute', top: 80, left: 60, color: '#fff' }}>
          <Title style={{ color: '#fff', fontSize: 40, marginBottom: 0 }}>善策出海服务平台</Title>
          <Paragraph style={{ color: '#fff', fontSize: 20, maxWidth: 600 }}>
            一站式海外公司注册、建厂、认证与合规服务，助力中国企业全球化！
          </Paragraph>
        </div>
      </div>
      {/* 公司简介 */}
      <Title level={3}>公司简介</Title>
      <Paragraph style={{ fontSize: 16, color: '#555' }}>
        善策出海致力于为中国企业提供专业的出海全流程服务，涵盖公司注册、海外建厂、产品认证、合规咨询等。我们拥有丰富的国际资源和经验，助力企业高效、合规地拓展全球市场。
      </Paragraph>
      <Divider orientation="left">核心服务</Divider>
      <Row gutter={24} style={{ marginBottom: 32 }}>
        {services.map((s, i) => (
          <Col span={8} key={s.id}>
            <Card hoverable style={{ textAlign: 'center', minHeight: 220 }}>
              <div style={{ marginBottom: 16 }}>{serviceIcons[i % serviceIcons.length]}</div>
              <Title level={4}>{s.title}</Title>
              <Paragraph>{s.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
      <Divider orientation="left">最新资讯</Divider>
      <Row gutter={24}>
        {news.map((n, idx) => (
          <Col span={12} key={n.id}>
            <Card hoverable style={{ display: 'flex', alignItems: 'center', minHeight: 140 }}>
              <Image
                src={`https://source.unsplash.com/collection/190727/120x90?sig=${idx}`}
                width={120}
                height={90}
                style={{ objectFit: 'cover', borderRadius: 6, marginRight: 16 }}
                preview={false}
              />
              <div>
                <Title level={5} style={{ marginBottom: 4 }}>{n.title}</Title>
                <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>{n.content}</Paragraph>
                <div style={{ color: '#888', fontSize: 12, marginTop: 4 }}>
                  发布时间：{n.publishedAt && new Date(n.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home; 