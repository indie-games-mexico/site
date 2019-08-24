module.exports = {
  langs: [
    {
      locale: 'en',
      name: 'English',
      dynamicUrl: { // used for blog/news entries
        label: 'News',
        url: 'news'
      }
    },
    {
      locale: 'es',
      name: 'Español',
      dynamicUrl: { // used for blog/news entries
        label: 'Noticias',
        url: 'noticias'
      }
    }
  ],
  defaultLangKey: 'en'
};
