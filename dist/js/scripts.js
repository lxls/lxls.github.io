$(function() {

    // List Page
    $('.products article, .product').each(function(i) {
        var $product   = $(this),
            subheading = $product.find('h3').text(),
            oldPrice   = $product.find('del').text();

        if(subheading) {
            $product.find('a > p').text(subheading);
        }

        if($product.find('h2').text().toLowerCase().match('outfit')) {
            $product.find('.price').hide();
            return;
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
            zoomContainer.append('<div id="tictail_fullscreen_close"></div>');
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

    var productName = $('.product h1').text();
    if(productName && productName.toLowerCase().match('outfit')) {
        $('.product__info .tictail_add_to_cart_button').hide();
        $('.product__info .tictail_variations_select').hide();
        $('.product__info .price').hide();
        $('.product__info .info').hide();
        $('.product__info .payment-logos').hide();
    }

    var $swipe = $('#campaign');
    if($swipe) {
        var options = $swipe.hasClass('auto') ? {auto: 4500} : {};
        window.swipe = Swipe(document.getElementById('campaign'), options);

        $('.prev').click(function() {
            window.swipe.prev();
        });

        $('.next').click(function() {
            window.swipe.next();
        });
    }

});