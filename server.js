app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    projects: [
      {
        id: 1,
        title: 'مشروع توريد المواد الغذائية',
        description: 'تأمين توريد مواد غذائية شاملة للمستشفيات والمؤسسات الكبرى.',
        image: '/images/food-project.jpg',
        rating: 4.8,
        totalFunding: 50000, // إجمالي المبلغ المطلوب من المحفظة
        fundedAmount: 35000   // المبلغ الممول حتى الآن
      },
      {
        id: 2,
        title: 'مشروع المعدات الطبية',
        description: 'استيراد وتوزيع أجهزة ومستلزمات مخابر حديثة للمراكز الطبية.',
        image: '/images/medical-project.jpg',
        rating: 4.9,
        totalFunding: 120000,
        fundedAmount: 120000
      }
    ]
  });
});