import React, { useEffect, useState } from 'react'; 
import { Table, Button, Modal, Form, Input, message, Popconfirm } from 'antd';
import axios from 'axios';

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const fetchServices = () => {
    axios.get('/api/services').then(res => setServices(res.data));
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('/api/services', values);
      message.success('添加成功');
      setModalOpen(false);
      fetchServices();
      form.resetFields();
    } catch {
      message.error('添加失败');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/services/${id}`);
    message.success('删除成功');
    fetchServices();
  };

  const handleOpen = () => {
    setModalOpen(true);
    setTimeout(() => form.resetFields(), 0); // 确保字段清空
  };

  return (
    <div>
      <Button type="primary" onClick={handleOpen} style={{ marginBottom: 16 }}>新增服务</Button>
      <Table dataSource={services} rowKey="id" pagination={false} bordered
        columns={[
          { title: '服务名称', dataIndex: 'title' },
          { title: '描述', dataIndex: 'description' },
          {
            title: '操作',
            render: (_, r) => (
              <Popconfirm title="确定删除？" onConfirm={() => handleDelete(r.id)}>
                <Button danger size="small">删除</Button>
              </Popconfirm>
            )
          },
        ]}
      />
      <Modal
        open={modalOpen}
        title="新增服务"
        onCancel={() => setModalOpen(false)}
        footer={null}
        destroyOnClose
        forceRender
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            title: '',
            description: '',
            icon: '',
          }}
        >
          <Form.Item
            name="title"
            label="服务名称"
            rules={[{ required: true, message: '请输入服务名称' }]}
          >
            <Input autoComplete="new-title" />
          </Form.Item>

          <Form.Item
            name="description"
            label="描述"
            rules={[{ required: true, message: '请输入描述' }]}
          >
            <Input.TextArea rows={3} autoComplete="new-description" />
          </Form.Item>

          <Form.Item
            name="icon"
            label="图标"
          >
            <Input autoComplete="new-icon" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminServices;
