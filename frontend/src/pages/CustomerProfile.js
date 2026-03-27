import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const CustomerProfile = () => {
  return (
    <div>
      <Title level={2}>ZENTK 公司客户画像 (Customer Profile)</Title>

      <Title level={3}>1. 核心客户画像 (Core Target)</Title>
      <Paragraph>
        这类客户是公司现阶段服务的重心，通常被称为细分领域的“隐形冠军”。
      </Paragraph>

      <Divider />

      <Title level={4}>基本特征</Title>
      <ul>
        <li>企业类型：创新类产品公司、拥有技术专利的“工厂型”企业。</li>
        <li>融资阶段：已完成天使轮融资或通过众筹获取了初期资金。</li>
        <li>团队背景：创始人年纪通常较轻，对海外市场规则不熟悉。</li>
      </ul>

      <Title level={4}>产品特质</Title>
      <ul>
        <li>具有较强的创新性，并非大众化的“大路货”。</li>
        <li>具备较高的产品溢价和毛利空间。</li>
      </ul>

      <Title level={4}>核心痛点</Title>
      <ul>
        <li>缺乏规划：不知道如何制定出海战略规划。</li>
        <li>渠道缺失：缺乏海外当地合作伙伴及销售渠道资源。</li>
        <li>履约困难：具备渠道后，不清楚如何执行具体的合作流程。</li>
        <li>财资盲区：对跨境财务往来及资金回笼方案不清晰。</li>
      </ul>

      <Divider />

      <Title level={3}>3. “非客户”清单 (Negative Personas)</Title>
      <Paragraph>
        创业公司必须学会拒绝不属于自己的客户，以保证资源聚焦。
      </Paragraph>

      <Title level={4}>过于早期的初创企业</Title>
      <ul>
        <li>原因：缺乏资金支持服务费用，且产品本身尚不成熟。</li>
      </ul>

      <Title level={4}>缺乏竞争力的产品</Title>
      <ul>
        <li>无创意：没有创新性的平庸产品。</li>
        <li>低溢价：无法支撑高毛利、没有价格竞争优势的产品。</li>
      </ul>

      <Title level={4}>纯贸易型卖家</Title>
      <Paragraph>
        建议避开仅想“卖货”的投机性卖家，专注于有技术根基的企业。
      </Paragraph>
    </div>
  );
};

export default CustomerProfile;
