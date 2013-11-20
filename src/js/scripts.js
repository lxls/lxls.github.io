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

    // TODO: Product Page

});