import React, { useEffect, useState } from 'react'; 
import { Table, Button, Modal, Form, Input, DatePicker, message, Popconfirm } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const fetchNews = () => {
    axios.get('/api/news').then(res => setNews(res.data));
  };

  useEffect(() => { fetchNews(); }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('/api/news', {
        ...values,
        publishedAt: values.publishedAt.format('YYYY-MM-DD'),
      });
      message.success('添加成功');
      setModalOpen(false);
      fetchNews();
      form.resetFields();
    } catch {
      message.error('添加失败');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/news/${id}`);
    message.success('删除成功');
    fetchNews();
  };

  const handleOpen = () => {
    setModalOpen(true);
    setTimeout(() => form.resetFields(), 0);
  };

  return (
    <div>
      <Button type="primary" onClick={handleOpen} style={{ marginBottom: 16 }}>新增新闻</Button>
      <Table dataSource={news} rowKey="id" bordered
        columns={[
          { title: '标题', dataIndex: 'title' },
          { title: '内容', dataIndex: 'content', ellipsis: true },
          { title: '发布时间', dataIndex: 'publishedAt', render: t => t && dayjs(t).format('YYYY-MM-DD') },
          { title: '操作', render: (_, r) => (
            <Popconfirm title="确定删除？" onConfirm={() => handleDelete(r.id)}>
              <Button danger size="small">删除</Button>
            </Popconfirm>
          ) },
        ]}
      />
      <Modal open={modalOpen} title="新增新闻" onCancel={() => setModalOpen(false)} footer={null} destroyOnClose forceRender>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            title: '',
            content: '',
            publishedAt: null,
            cover: ''
          }}
        >
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input autoComplete="new-title" />
          </Form.Item>

          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入内容' }]}
          >
            <Input.TextArea rows={4} autoComplete="new-content" />
          </Form.Item>

          <Form.Item
            name="publishedAt"
            label="发布时间"
            rules={[{ required: true, message: '请选择日期' }]}
            valuePropName="value"
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="cover"
            label="封面"
          >
            <Input autoComplete="new-cover" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminNews;
