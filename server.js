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
    },
    {
      id: 3,
      title: '诗意代码',
      description: '将算法转化为视觉诗篇，创造独特的数字艺术体验。',
      image: '/images/project3.jpg',
      tags: ['开发', '创意编程', '交互'],
      createdAt: '2024-01-05'
    }
  ]);
});

// 获取单个项目
app.get('/api/projects/:id', (req, res) => {
  const projects = [
    {
      id: 1,
      title: '星辰系列',
      description: '受穆夏启发的数字艺术创作，融合古典美学与现代技术。',
      image: '/images/project1.jpg',
      tags: ['插画', '设计', '艺术'],
      createdAt: '2024-01-15',
      content: '这里是项目的完整描述...'
    },
    {
      id: 2,
      title: '古典复兴',
      description: '传统艺术风格的现代诠释，探索历史与未来的交汇点。',
      image: '/images/project2.jpg',
      tags: ['设计', '品牌', 'UI/UX'],
      createdAt: '2024-01-10',
      content: '这里是项目的完整描述...'
    },
    {
      id: 3,
      title: '诗意代码', 
      description: '将算法转化为视觉诗篇，创造独特的数字艺术体验。',
      image: '/images/project3.jpg',
      tags: ['开发', '创意编程', '交互'],
      createdAt: '2024-01-05',
      content: '这里是项目的完整描述...'
    }
  ];
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: '项目未找到' });
  }
});

// 模拟博客数据
app.get('/api/blog', (req, res) => {
  res.json([
    {
      id: 1,
      title: '穆夏与新艺术运动',
      excerpt: '探索阿尔丰斯·穆夏如何将自然形态与装饰艺术完美结合，创造出一个充满优雅线条和柔和色彩的世界。',
      author: 'Channing Winchester',
      createdAt: '2024-01-20',
      tags: ['艺术', '设计', '历史']
    },
    {
      id: 2,
      title: '数字时代的古典美学',
      excerpt: '在快节奏的数字化时代，如何保持对传统艺术形式的尊重与创新，让古典美学在现代设计中焕发新生。',
      author: 'Channing Winchester',
      createdAt: '2024-01-15', 
      tags: ['设计', '技术', '美学']
    },
    {
      id: 3,
      title: '色彩心理学在UI设计中的应用',
      excerpt: '从穆夏的配色方案中学习如何运用色彩影响用户情绪，创造既有美感又具功能性的数字体验。',
      author: 'Channing Winchester',
      createdAt: '2024-01-10',
      tags: ['UI/UX', '心理学', '色彩']
    }
  ]);
});

// 获取单篇博客文章
app.get('/api/blog/:id', (req, res) => {
  const posts = [
    {
      id: 1,
      title: '穆夏与新艺术运动',
      content: '这里是完整的文章内容...探索阿尔丰斯·穆夏如何将自然形态与装饰艺术完美结合，创造出一个充满优雅线条和柔和色彩的世界。新艺术运动（Art Nouveau）是19世纪末20世纪初的一场国际性艺术运动，强调自然形态、曲线和有机线条。',
      author: 'Channing Winchester',
      createdAt: '2024-01-20',
      tags: ['艺术', '设计', '历史'],
      comments: [
        {
          id: 1,
          author: '艺术爱好者',
          content: '非常精彩的分析！',
          createdAt: '2024-01-21'
        }
      ]
    },
    {
      id: 2,
      title: '数字时代的古典美学',
      content: '这里是完整的文章内容...在快节奏的数字化时代，如何保持对传统艺术形式的尊重与创新。',
      author: 'Channing Winchester',
      createdAt: '2024-01-15',
      tags: ['设计', '技术', '美学'],
      comments: []
    },
    {
      id: 3,
      title: '色彩心理学在UI设计中的应用',
      content: '这里是完整的文章内容...从穆夏的配色方案中学习如何运用色彩影响用户情绪。',
      author: 'Channing Winchester', 
      createdAt: '2024-01-10',
      tags: ['UI/UX', '心理学', '色彩'],
      comments: []
    }
  ];
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: '文章未找到' });
  }
});

// 联系表单
app.post('/api/contact', (req, res) => {
  console.log('Contact form received:', req.body);
  res.json({ success: true, message: '消息发送成功！我们会尽快回复您。' });
});

// 用户登录（模拟）
app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email);
  
  // 模拟登录验证
  if (email && password) {
    res.json({
      success: true,
      data: {
        user: {
          id: 1,
          name: 'Channing Winchester',
          email: email
        },
        token: 'mock-jwt-token-' + Date.now()
      }
    });
  } else {
    res.status(400).json({ success: false, error: '请输入邮箱和密码' });
  }
});

// 用户注册（模拟）
app.post('/api/users/register', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Register attempt:', name, email);
  
  if (name && email && password) {
    res.json({
      success: true,
      data: {
        user: {
          id: 1,
          name: name,
          email: email
        },
        token: 'mock-jwt-token-' + Date.now()
      }
    });
  } else {
    res.status(400).json({ success: false, error: '请填写所有必填字段' });
  }
});

// 获取当前用户信息（模拟）
app.get('/api/users/me', (req, res) => {
  // 模拟用户信息
  res.json({
    success: true,
    data: {
      id: 1,
      name: 'Channing Winchester',
      email: 'admin@example.com'
    }
  });
});

// 博客评论（模拟）
app.post('/api/blog/:postId/comments', (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  console.log('New comment on post', postId, ':', content);
  
  res.json({
    success: true,
    data: {
      id: Date.now(),
      author: '当前用户',
      content: content,
      createdAt: new Date().toISOString().split('T')[0]
    }
  });
});

// 管理功能 - 创建项目（模拟）
app.post('/api/projects', (req, res) => {
  console.log('Create project:', req.body);
  res.json({ 
    success: true, 
    data: { ...req.body, id: Date.now(), createdAt: new Date().toISOString().split('T')[0] }
  });
});

// 管理功能 - 更新项目（模拟）
app.put('/api/projects/:id', (req, res) => {
  console.log('Update project:', req.params.id, req.body);
  res.json({ success: true, data: req.body });
});

// 管理功能 - 删除项目（模拟）  
app.delete('/api/projects/:id', (req, res) => {
  console.log('Delete project:', req.params.id);
  res.json({ success: true, message: '项目删除成功' });
});

// 管理功能 - 创建博客文章（模拟）
app.post('/api/blog', (req, res) => {
  console.log('Create blog post:', req.body);
  res.json({ 
    success: true, 
    data: { ...req.body, id: Date.now(), createdAt: new Date().toISOString().split('T')[0] }
  });
});

// 管理功能 - 更新博客文章（模拟）
app.put('/api/blog/:id', (req, res) => {
  console.log('Update blog post:', req.params.id, req.body);
  res.json({ success: true, data: req.body });
});

// 管理功能 - 删除博客文章（模拟）
app.delete('/api/blog/:id', (req, res) => {
  console.log('Delete blog post:', req.params.id);
  res.json({ success: true, message: '文章删除成功' });
});

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});