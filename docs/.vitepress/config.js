export default {
  title: 'Odyssey Exchange',
  description: 'Ваша Надежная Централизованная Криптобиржа',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'О Нас', link: '/about' },
      { text: 'Сервисы', link: '/services' },
      { text: 'Партнерство', link: '/partnership' },
      { text: 'Решения', link: '/solutions' },
      { text: 'Контакты', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'Руководство',
        items: [
          { text: 'Начало Работы', link: '/guide/getting-started' },
          { text: 'Почему Мы', link: '/guide/why-partner' },
          { text: 'Процесс Интеграции', link: '/guide/integration' },
          { text: 'Модели Дохода', link: '/guide/revenue-models' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://t.me/t_dmi3' },
      { icon: 'twitter', link: 'https://twitter.com/t_dmi3' }
    ]
  },
  appearance: {
    label: 'Внешний вид'
  }
}