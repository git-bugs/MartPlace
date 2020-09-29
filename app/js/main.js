$(function(){
    $('.products__inner').slick({
        arrows: true, 
        dots: false,
        prevArrow: '<button type="button" class="slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next lnr lnr-chevron-right"></button>'
    });

    $('.followers__items-inner').slick({
        arrows: true, 
        dots: false,
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next lnr lnr-chevron-right"></button>'
    });

    $('.item-rate').rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true
    });

    $('.category__item-rate').rateYo({
        rating: 4,
        starWidth: "15px",
        readOnly: true
    });
    




    




    var mixer = mixitup('.category__items');
});