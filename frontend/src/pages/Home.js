import React from 'react';
import { Typography, Row, Col, Card, Divider, Table, Space, Button } from 'antd';
import {
  GlobalOutlined,
  SafetyCertificateOutlined,
  DeploymentUnitOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const metrics = [
  { value: '120+', label: '全球覆盖城市' },
  { value: '8', label: '核心优势市场' },
  { value: '10+', label: '行业头部落地成功案例' },
  { value: '2023', label: '持续专注硬科技赛道起始年' },
];

const services = [
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 30, color: '#2f54eb' }} />,
    title: '战略与合规 (Strategy & Compliance)',
    desc: '深度开展市场准入研究，协助国际认证，确保品牌合规进入主流市场。',
  },
  {
    icon: <GlobalOutlined style={{ fontSize: 30, color: '#2f54eb' }} />,
    title: '全球渠道网络 (Global Distribution)',
    desc: '整合电商、零售、展会与媒体资源，在欧亚非美核心市场推进渠道落地。',
  },
  {
    icon: <DeploymentUnitOutlined style={{ fontSize: 30, color: '#2f54eb' }} />,
    title: '零售与动线设计 (Retail & Distribution)',
    desc: '提供“物、训、人、培”一体化方案，优化终端转化并强化本地化运营能力。',
  },
  {
    icon: <TeamOutlined style={{ fontSize: 30, color: '#2f54eb' }} />,
    title: '智库专家守护 (Think Tank Services)',
    desc: '从出海战略、品牌定位到供应链优化，提供顾问级别长期支持。',
  },
];

const footprintColumns = [
  { title: '地区', dataIndex: 'region', key: 'region' },
  { title: '核心市场', dataIndex: 'market', key: 'market' },
  { title: '渠道优势', dataIndex: 'advantage', key: 'advantage' },
];

const footprintData = [
  {
    key: 'eu',
    region: '欧洲',
    market: '德国、意大利、匈牙利、罗马尼亚',
    advantage: '新能源、智能硬件、头部商超渠道（如 MediaMarkt）',
  },
  {
    key: 'asia',
    region: '亚洲',
    market: '新加坡、印度',
    advantage: '科创出海、电商平台、本地化全案运营',
  },
  {
    key: 'us',
    region: '美洲',
    market: '美国（硅谷 / 湾区）',
    advantage: '消费电子、媒体投放、分销谈判、CES 展会',
  },
  {
    key: 'africa',
    region: '非洲',
    market: '肯尼亚',
    advantage: '贸易落地、基础建设与能源项目对接',
  },
];

const successCases = [
  {
    title: '案例 01 | 东南亚 · 科创企业',
    challenge: '缺乏本地化营销手段，市场突破缓慢。',
    solution: '“电商平台 + 本地零售”双驱模式，叠加 KOL 精准营销。',
    result: '品牌渗透率提升 30%。',
  },
  {
    title: '案例 02 | 欧洲 · 新能源品牌',
    challenge: '德、意市场准入门槛高，渠道进入难。',
    solution: '提供合规认证全流程辅导 + 渠道准入谈判。',
    result: '成功进入 3 家欧洲头部零售渠道（含 MediaMarkt）。',
  },
  {
    title: '案例 03 | 美国 · 消费电子',
    challenge: '北美市场竞争激烈，品牌信任建立困难。',
    solution: '策划 CES 首秀并推进线下分销合作。',
    result: '成功入驻 BestBuy 与 Amazon US。',
  },
];

const sectionTitleStyle = { color: '#0b1f4d', marginBottom: 8 };

const Home = () => (
  <div style={{ background: '#f4f7ff' }}>
    <div
      style={{
        background: 'linear-gradient(120deg, #081a4b 0%, #123c93 55%, #1f63d9 100%)',
        borderRadius: 12,
        padding: '48px 44px',
        color: '#fff',
        marginBottom: 28,
      }}
    >
      <Title style={{ color: '#fff', marginBottom: 8 }}>
        ZENTK | 硬科技出海全链路服务商
      </Title>
      <Title level={3} style={{ color: '#dce8ff', fontWeight: 500, marginTop: 0 }}>
        One-stop Global Go-to-Market Solution
      </Title>
      <Paragraph style={{ color: '#f0f5ff', fontSize: 16, maxWidth: 900, marginBottom: 24 }}>
        ZENTK 聚焦能源与科创领域，打通中国品牌从国内到全球市场的“战略-合规-落地-增长”全流程，
        助力硬科技企业在全球市场实现深度渗透与价值增长。
      </Paragraph>
      <Row gutter={[16, 16]}>
        {metrics.map(item => (
          <Col xs={24} sm={12} md={6} key={item.label}>
            <Card
              bordered={false}
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(2px)',
                borderRadius: 10,
              }}
            >
              <Title level={2} style={{ color: '#fff', margin: 0 }}>{item.value}</Title>
              <Text style={{ color: '#d6e4ff' }}>{item.label}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

    <Card bordered={false} style={{ borderRadius: 12, marginBottom: 24 }}>
      <Title level={2} style={sectionTitleStyle}>01 关于我们 (Who We Are)</Title>
      <Paragraph style={{ fontSize: 16, color: '#1f2f57' }}>
        我们致力于为中国新能源、智能制造企业构建全球化落地能力，不只提供单点服务，而是以长期增长为导向，
        打造“策略制定、认证合规、渠道拓展、终端运营、智库支持”一体化体系。
      </Paragraph>
    </Card>

    <Card bordered={false} style={{ borderRadius: 12, marginBottom: 24 }}>
      <Title level={2} style={sectionTitleStyle}>02 服务体系 (Our Services)</Title>
      <Paragraph style={{ color: '#4c5f87' }}>
        我们不只是中介，更是企业全球化增长合伙人。
      </Paragraph>
      <Row gutter={[16, 16]}>
        {services.map(item => (
          <Col xs={24} md={12} key={item.title}>
            <Card
              hoverable
              style={{ borderRadius: 10, border: '1px solid #d6e4ff', height: '100%' }}
            >
              <Space align="start">
                <div>{item.icon}</div>
                <div>
                  <Title level={4} style={{ marginTop: 0 }}>{item.title}</Title>
                  <Paragraph style={{ color: '#334a75', marginBottom: 0 }}>{item.desc}</Paragraph>
                </div>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>

    <Card bordered={false} style={{ borderRadius: 12, marginBottom: 24 }}>
      <Title level={2} style={sectionTitleStyle}>03 全球布局 (Global Footprint)</Title>
      <Paragraph style={{ color: '#4c5f87' }}>
        在地资源覆盖全球核心经济增长极，支撑品牌快速、精准落地。
      </Paragraph>
      <Table
        columns={footprintColumns}
        dataSource={footprintData}
        pagination={false}
        bordered
        size="middle"
      />
    </Card>

    <Card bordered={false} style={{ borderRadius: 12, marginBottom: 24 }}>
      <Title level={2} style={sectionTitleStyle}>04 成功案例 (Success Stories)</Title>
      <Row gutter={[16, 16]}>
        {successCases.map(item => (
          <Col xs={24} md={8} key={item.title}>
            <Card style={{ borderRadius: 10, border: '1px solid #e6ecff', height: '100%' }}>
              <Title level={4}>{item.title}</Title>
              <Divider style={{ margin: '10px 0' }} />
              <Paragraph><Text strong>挑战：</Text>{item.challenge}</Paragraph>
              <Paragraph><Text strong>方案：</Text>{item.solution}</Paragraph>
              <Paragraph style={{ marginBottom: 0 }}><Text strong>成果：</Text>{item.result}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>

    <Card
      bordered={false}
      style={{
        borderRadius: 12,
        background: 'linear-gradient(120deg, #0b1f4d 0%, #1e4da8 100%)',
        color: '#fff',
      }}
    >
      <Title level={2} style={{ color: '#fff', marginBottom: 8 }}>05 开启合作 (Contact Us)</Title>
      <Paragraph style={{ color: '#dce8ff', fontSize: 16 }}>
        与 ZENTK 共同开启全球化增长新篇章。无论您是海外渠道商，还是计划走向全球市场的品牌方与制造商，
        我们都可以为您提供定制化出海解决方案。
      </Paragraph>
      <Button type="primary" size="large" href="/inquiry">
        立即咨询合作
      </Button>
    </Card>
  </div>
);

export default Home; 
