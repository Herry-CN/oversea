import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Popconfirm, message } from 'antd';
import axios from 'axios';

const INDUSTRY_LABELS = {
  '综合咨询': '综合咨询',
  '互联网': '互联网',
  '跨境电商': '跨境电商',
  '消费品牌': '消费品牌',
  '制造业': '制造业',
  '基础建设': '基础建设',
  '其他': '其他',
};

function exportToCSV(data) {
  if (!data.length) return;
  const columns = [
    '提交时间', '投资领域/行业', '咨询范畴', '自定义范畴', '咨询描述', '姓名', '公司', '职位', '邮箱', '手机号'
  ];
  const csvRows = [columns.join(',')];
  data.forEach(row => {
    csvRows.push([
      row.createdAt ? new Date(row.createdAt).toLocaleString() : '',
      INDUSTRY_LABELS[row.type] || row.type || '',
      row.type === '其他' ? '' : (row.tags ? row.tags : ''),
      row.type === '其他' ? (row.tags || row.customScope || '') : (row.customScope || ''),
      row.message || '',
      row.name || '',
      row.company || '',
      row.jobTitle || '',
      row.email || '',
      row.phone || ''
    ].map(v => `"${(v || '').replace(/"/g, '""')}` ).join(','));
  });
  const csvContent = '\uFEFF' + csvRows.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'inquiries.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  const fetchInquiries = () => {
    axios.get('/api/inquiries').then(res => setInquiries(res.data));
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/inquiries/${id}`);
    message.success('删除成功');
    fetchInquiries();
  };

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => exportToCSV(inquiries)}>导出为CSV</Button>
      <Table
        dataSource={inquiries}
        rowKey="id"
        bordered
        columns={[
          { title: '提交时间', dataIndex: 'createdAt', render: t => t && new Date(t).toLocaleString() },
          { title: '投资领域/行业', dataIndex: 'type', render: t => INDUSTRY_LABELS[t] || t },
          {
            title: '咨询范畴',
            dataIndex: 'tags',
            render: (tags, record) => {
              if (record.type === '其他') return '';
              return tags ? tags.split(',').map(tag => <Tag key={tag}>{tag}</Tag>) : null;
            }
          },
          {
            title: '自定义范畴',
            dataIndex: 'customScope',
            render: (customScope, record) => record.type === '其他' ? (record.tags || customScope) : (customScope || '')
          },
          { title: '咨询描述', dataIndex: 'message', ellipsis: true },
          { title: '姓名', dataIndex: 'name' },
          { title: '公司', dataIndex: 'company' },
          { title: '职位', dataIndex: 'jobTitle' },
          { title: '邮箱', dataIndex: 'email' },
          { title: '手机号', dataIndex: 'phone' },
          {
            title: '操作',
            dataIndex: 'id',
            fixed: 'right',
            width: 80,
            render: (id) => (
              <Popconfirm title="确定删除？" onConfirm={() => handleDelete(id)}>
                <Button danger size="small">删除</Button>
              </Popconfirm>
            )
          }
        ]}
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default AdminInquiries; 