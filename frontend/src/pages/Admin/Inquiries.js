import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get('/api/inquiries').then(res => setInquiries(res.data));
  }, []);

  return (
    <div>
      <Table dataSource={inquiries} rowKey="id" bordered
        columns={[
          { title: '姓名', dataIndex: 'name' },
          { title: '邮箱', dataIndex: 'email' },
          { title: '电话', dataIndex: 'phone' },
          { title: '内容', dataIndex: 'message', ellipsis: true },
          { title: '提交时间', dataIndex: 'createdAt', render: t => t && new Date(t).toLocaleString() },
        ]}
      />
    </div>
  );
};

export default AdminInquiries; 