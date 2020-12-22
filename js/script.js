    
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.pre-order__slider').slick({
      // centerMode: true,
      // centerPadding: '60px',
        slidesToShow: 3,
        slidesToSCroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<div class="arrow-next"><img class="arrow-right" src="icons/pre-order/arrow-right.png" alt="arrow-right"></div>',
        prevArrow: '<div class="arrow-prev"><img class="arrow-left" src="icons/pre-order/arrow-left.png" alt="arrow-left"></div>',
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
            },
            {
                breakpoint: 470,
                    settings: {
                        slidesToShow: 1
                    }
            }
        ]
      // responsive: [
      //   {
      //   breakpoint: 768,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 3
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 1
      //     }
      //   }
      // ]
    });

    $('.category__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="arrow-next"><img class="arrow-right" src="icons/pre-order/arrow-right.png" alt="arrow-right"></div>',
        prevArrow: '<div class="arrow-prev"><img class="arrow-left" src="icons/pre-order/arrow-left.png" alt="arrow-left"></div>'
    });

    // Tabs
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function() {
                let nameCat = $(this).data('cat');
      
                if (nameCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

    });

    // Xbox
    let filterXbox = $("[data-sort]");

    filterXbox.on("click", (e) => {
        e.preventDefault();

        let catXbox = $(this).data('xbox');

        // if (catXbox == 'xbox')

        $("[data-xbox]").each(function() {
            let nameCatXbox = $(this).data('xbox');

            if (nameCatXbox != catXbox) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
    });

    // Pc
    let filterPc = $("[data-sortpc]");

    filterPc.on("click", (e) => {
        e.preventDefault();

        let catPc = $(this).data('pc');

        // if (catXbox == 'xbox')

        $("[data-xbox]").each(function() {
            let nameCatPc = $(this).data('pc');

            if (nameCatPc != catPc) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
    });

    
});
