$(document).ready(function () {

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {

            duration: 3000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }

        });

    });
    var mixer = mixitup(containerEl);


    // $('#carousel-example').on('slide.bs.carousel', function (e) {
    //     /*
    //         CC 2.0 License Iatek LLC 2018 - Attribution required
    //     */
    //     var $e = $(e.relatedTarget);
    //     var idx = $e.index();
    //     var itemsPerSlide = 5;
    //     var totalItems = $('.carousel-item').length;

    //     if (idx >= totalItems - (itemsPerSlide - 1)) {
    //         var it = itemsPerSlide - (totalItems - idx);
    //         for (var i = 0; i < it; i++) {
    //             // append slides to end
    //             if (e.direction == "left") {
    //                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
    //             }
    //             else {
    //                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
    //             }
    //         }
    //     }
    // });
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplaySpeed:1000,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('.owl-carousel').trigger('play/.owl.autoplay',[1000])
    console.log('fire');
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel();

    }

    );
    // When the user scrolls the page, execute myFunction
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            // $nav.toggleClass(
                // 'scrolled',
                // )
                
            if ($(this).scrollTop() > $nav.height()) {
                $nav.addClass('scrolled',300);
            } else{
                $nav.removeClass('scrolled',300)
            }
        
    })});
    });

