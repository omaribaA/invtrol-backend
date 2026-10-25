const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    projects: [
      { title: 'مشروع توريد المواد الغذائية', description: 'تأمين توريد مواد غذائية شاملة للمستشفيات والمؤسسات.' },
      { title: 'مشروع المعدات الطبية', description: 'استيراد وتوزيع أجهزة ومستلزمات مخابر حديثة.' }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));