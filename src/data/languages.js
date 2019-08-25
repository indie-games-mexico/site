module.exports = {
  langs: [
    {
      locale: 'en',
      name: 'English',
      dynamicUrl: { // used for blog/news entries
        title: 'News',
        url: 'news'
      }
    },
    {
      locale: 'es',
      name: 'Español',
      dynamicUrl: { // used for blog/news entries
        title: 'Noticias',
        url: 'noticias'
      }
    }
  ],
  defaultLangKey: 'en'
};
