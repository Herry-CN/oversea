import React, { useEffect, useState } from 'react';
import { List, Typography, Card, Image } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/news').then(res => setNews(res.data));
  }, []);

  return (
    <div>
      <Title level={2}>新闻资讯</Title>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={news}
        renderItem={(item, idx) => (
          <List.Item>
            <Card hoverable style={{ display: 'flex', alignItems: 'center', minHeight: 140 }}>
              <Image
                src={`https://source.unsplash.com/collection/190727/120x90?sig=${idx}`}
                width={120}
                height={90}
                style={{ objectFit: 'cover', borderRadius: 6, marginRight: 16 }}
                preview={false}
              />
              <div>
                <Title level={5} style={{ marginBottom: 4 }}>{item.title}</Title>
                <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>{item.content}</Paragraph>
                <div style={{ color: '#888', fontSize: 12, marginTop: 4 }}>
                  发布时间：{item.publishedAt && new Date(item.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default News; 