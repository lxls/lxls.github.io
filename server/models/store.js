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
            url: ''
          },
          {
            label: 'Blouses & Shirts',
            url: ''
          },
          {
            label: 'Knitwear',
            url: ''
          },
          {
            label: 'Blazers',
            url: ''
          },
          {
            label: 'Dresses',
            url: ''
          },
          {
            label: 'Outerwear',
            url: ''
          },
          {
            label: 'Denim & Trousers',
            url: ''
          },
          {
            label: 'Skirts',
            url: ''
          },
          {
            label: 'Shorts',
            url: ''
          },
          {
            label: 'Shoes & Accessories',
            url: ''
          }
        ]
      },
      {
        label: 'Shop by Brand',
        url: '/products'
      },
      {
        label: 'View Outfits',
        url: '/products'
      }
    ],
    store_subdomain: 'lxls',
    assets_url: '//dhskp7m6mg2zv.cloudfront.net/theme_assets'
  };
}