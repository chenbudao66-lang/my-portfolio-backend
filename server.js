const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 测试路由
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API is running!' });
});

// 模拟项目数据
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: '星辰系列',
      description: '受穆夏启发的数字艺术创作，融合古典美学与现代技术。',
      image: '/images/project1.jpg',
      tags: ['插画', '设计', '艺术'],
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: '古典复兴',
      description: '传统艺术风格的现代诠释，探索历史与未来的交汇点。',
      image: '/images/project2.jpg',
      tags: ['设计', '品牌', 'UI/UX'],
      createdAt: '2024-01-10'
    }
  ]);
});

// 模拟博客数据
app.get('/api/blog', (req, res) => {
  res.json([
    {
      id: 1,
      title: '穆夏与新艺术运动',
      excerpt: '探索阿尔丰斯·穆夏如何将自然形态与装饰艺术完美结合...',
      author: 'Channing Winchester',
      createdAt: '2024-01-20',
      tags: ['艺术', '设计', '历史']
    }
  ]);
});

// 联系表单
app.post('/api/contact', (req, res) => {
  console.log('Contact form received:', req.body);
  res.json({ success: true, message: '消息发送成功！' });
});

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});