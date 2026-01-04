import React, { useState } from 'react';
import {
  Typography, Form, Input, Button, message, Card, Row, Col, Checkbox,
  Radio, Divider
} from 'antd';
import axios from 'axios';

const { Title, Paragraph, Text } = Typography;

const INDUSTRY_OPTIONS = [
  '综合咨询', '互联网', '跨境电商', '消费品牌', '制造业', '基础建设', '其他'
];

const SCOPE_MAP = {
  '综合咨询': ['商务考察', '市场调研', '合资并购', '投资孵化', '公司注册', '工厂注册', '记账报税',
    '法律咨询', '工作许可', '产品认证', '特殊牌照', '金融服务', '支付通道', '线上流量', '人力资源'],
  '互联网': ['商务考察', '市场调研', '公司注册', '记账报税', '税务筹划', '商标注册', '初创企业认证',
    '支付通道', '短信方案', '线上流量', '线下推广', '广告拍摄', 'MCN推广', 'NBFC牌照', '法律意见'],
  '跨境电商': ['商标注册', '电商入驻', '支付通道', '线上流量', '线下推广', 'MCN推广',
    '电子产品认证', '无线产品认证', '美妆产品认证', '品牌推广', '仓储物流', '租房租车'],
  '消费品牌': ['商务考察', '市场调研', '公司注册', '记账报税', '税务筹划', '转移定价', '商标注册',
    '电商入驻', '支付通道', '法律咨询', '线上流量', '线下推广', 'MCN推广', '招聘服务', '考务挂靠'],
  '制造业': ['工厂选址', '厂房租赁', '公司注册', '工厂注册', '环境评估', '税务筹划', '转移定价',
    '法律咨询', '出口免税', '设备免税', '优惠政策', 'MSME资质', '工作签证', '产品认证',
    'ISO认证', '项目代理', '项目办公室注册', '记账报税', '审计', '劳务挂靠', '采购方案',
    '技工对接', '仓储物流', '租房租车'],
  '基础建设': ['自贸区/海外仓', '租房租车'],
  '其他': ['请输入自定义内容']
};

const Inquiry = () => {
  const [form] = Form.useForm();
  const [industry, setIndustry] = useState('');
  const [scope, setScope] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);
    try {
      let tagsValue = '';
      if (industry === '其他') {
        tagsValue = values.customScope || '';
      } else {
        tagsValue = scope.join(',');
      }
      axios.post('/api/inquiries', {
        ...values,
        type: industry,
        tags: tagsValue,
      });
      message.success('提交成功，我们会尽快联系您！');
      form.resetFields();
      setIndustry('');
      setScope([]);
    } catch {
      message.error('提交失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  // 咨询范畴渲染逻辑
  const renderScopeField = () => {
    if (!industry) return null;

    if (industry === '其他') {
      return (
        <Form.Item
          name="customScope"
          label={<span><b>您的咨询范畴</b> <Text type="danger">*</Text></span>}
          rules={[{ required: true, message: '请输入您想咨询的内容' }]}
        >
          <Input.TextArea
            rows={3}
            placeholder="请输入您想咨询的内容"
            value={scope[0] || ''}
            onChange={e => setScope([e.target.value])}
          />
        </Form.Item>
      );
    }

    const options = SCOPE_MAP[industry] || [];

    return (
      <Form.Item
        label={<span><b>您的咨询范畴</b> <Text type="danger">*</Text></span>}
        required
      >
        <div style={{ marginBottom: 8, color: '#888' }}>请选择您想咨询的事宜，可多选。</div>
        <Checkbox.Group
          options={options}
          value={scope}
          onChange={setScope}
        />
      </Form.Item>
    );
  };

  return (
    <div style={{ background: '#eaf2fa', minHeight: '100vh', padding: '32px 0' }}>
      <Card style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
        <Title level={2}>极速咨询 <Text type="secondary" style={{ fontSize: 18 }}>Instant Consulting</Text></Title>
        <Paragraph style={{ color: '#888' }}>根据您的需求匹配专业顾问，助力企业全球化！</Paragraph>
        <Divider />

        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          autoComplete="off"
        >
          <Form.Item
            label={<span><b>想了解的印度投资领域和行业</b> <Text type="danger">*</Text></span>}
            required
          >
            <Radio.Group
              options={INDUSTRY_OPTIONS}
              value={industry}
              onChange={e => {
                setIndustry(e.target.value);
                setScope([]);
              }}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>

          {renderScopeField()}

          <Form.Item
            name="message"
            label={<span><b>您的咨询描述</b> <Text type="secondary">（请详细描述您的问题）</Text></span>}
            rules={[{ required: true, message: '请填写您的问题或需求' }]}
          >
            <Input.TextArea rows={4} placeholder="请详细描述您的问题，便于专家为您精准解答。" />
          </Form.Item>

          <Divider />
          <Title level={4}>如何联系我们？</Title>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="您的姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="company" label="您的公司" rules={[{ required: true, message: '请输入公司名称' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="phone" label="手机号" rules={[{ required: true, message: '请输入手机号' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="email" label="工作邮箱" rules={[{ required: true, type: 'email', message: '请输入有效邮箱' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="jobTitle" label="工作职位" rules={[{ required: true, message: '请输入职位' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ width: 180, background: '#ff9900', border: 'none', fontWeight: 600 }}
            >
              立即咨询
            </Button>
          </Form.Item>
        </Form>

        <Divider />
        <Title level={4}>联系我们 <Text type="secondary">Contact us</Text></Title>
        <Paragraph>
          官网：<a href="https://www.XX.com" target="_blank" rel="noopener noreferrer">www.XX.com</a><br />
          法律税务热线：<a href="tel:+8620-XX">020-XX</a><br />
          (XX) <a href="tel:+91-XX">+91-124-XX</a>
        </Paragraph>
        <Paragraph style={{ fontSize: 13, color: '#555' }}>
          深圳<br />
          关注公众号：善策出海<br />
          客服微信：+86-<br />
          负责人：<br />
          邮箱：contact@QQ.com
        </Paragraph>
      </Card>
    </div>
  );
};

export default Inquiry;
