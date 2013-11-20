$(function() {

    // List Page
    $('.products article').each(function(i) {
        var $product   = $(this),
            subheading = $product.find('h3').text(),
            oldPrice   = $product.find('del').text();

        if(subheading) {
            $product.find('a > p').text(subheading);
        }

        if(oldPrice) {
            $product.find('.price del').text(oldPrice);
        }
    });

    // Product Page
    var zoomContainer = $('.image__zoom');
    if(zoomContainer) {
        productContainer = $('.product');
        $('.product__media a, .product__image a').on('click', function(e) {
            e.preventDefault();

            window.scrollTo(0, 0);
            zoomContainer.show();
            productContainer.hide();

            if(zoomContainer.html() !== '') return;
            $('.product__media a').each(function(i) {
                var src = $(this).attr('href');
                if(src) zoomContainer.append('<img src="'+src+'" />');
            });
        });

        zoomContainer.on('click', function() {
            window.scrollTo(0, 0);
            zoomContainer.hide();
            productContainer.show();
        });
    }

});