module.exports = function(port) {
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
    assets_url: '//dhskp7m6mg2zv.cloudfront.net/theme_assets',
    store_url: 'http://localhost:3000', // TODO: This should not be a hard coded value
    terms: function() {
      return function(label) {
        return '<a class="tictail_terms fullscreen fullscreen_iframe" href="/legal/terms">'+label+'</a>';
      }
    },
    return_policy: function() {
      return function(label) {
        return '<a class="tictail_return-policy fullscreen fullscreen_iframe" href="/legal/return-policy">'+label+'</a>';
      }
    }
  };
}