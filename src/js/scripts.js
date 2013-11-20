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
        $('.product__media a, .product__image a').on('click', function(e) {
            e.preventDefault();

            window.scrollTo(0, 0);
            zoomContainer.show();
            $('.product').hide();

            $('.product__media a').each(function(i) {
                var src = $(this).attr('href');

                console.log(src);

                zoomContainer.append('<img src="'+src+'" />');
            });
            console.log($(this));
        });

        zoomContainer.on('click', function(e) {
            zoomContainer.hide();
            $('.product').show();
        });
    }

});