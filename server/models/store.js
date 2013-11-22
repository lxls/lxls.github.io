module.exports = function() {
  return {
    store_name: 'LXLS',
    navigation: [
      {
        label: 'Shop by Category',
        url: '/products',
        'children?': true, // Category have children
        children: [
          {
            label: 'Tops',
            url: '',
            is_current: false
          },
          {
            label: 'Blouses & Shirts',
            url: '',
            is_current: false
          },
          {
            label: 'Knitwear',
            url: '',
            is_current: false
          },
          {
            label: 'Blazers',
            url: '',
            is_current: false
          },
          {
            label: 'Dresses',
            url: '',
            is_current: false
          },
          {
            label: 'Outerwear',
            url: '',
            is_current: false
          },
          {
            label: 'Denim & Trousers',
            url: '',
            is_current: true
          },
          {
            label: 'Skirts',
            url: '',
            is_current: false
          },
          {
            label: 'Shorts',
            url: '',
            is_current: false
          },
          {
            label: 'Shoes & Accessories',
            url: '',
            is_current: false
          }
        ]
      },
      {
        label: 'Shop by Brand',
        url: '/products'
      }
    ],
    store_subdomain: 'lxls',
    assets_url: '//dhskp7m6mg2zv.cloudfront.net/theme_assets'
  };
}