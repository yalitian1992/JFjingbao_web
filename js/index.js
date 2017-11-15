$(function () {

    new Swiper('#swiper-container-1', {
        direction: 'vertical',
        pagination: '.swiper-pagination',
        paginationBulletRender: function () {
            return '';
        },
        onTouchMove: function(swiper,direction){

        },
        onTouchEnd: function (swiper) {
            
        },

        onTransitionEnd: function(swiper){
        },
        //滑动前
        onSlideChangeStart: function(swiper){

        },
        //滑动后
        onSlideChangeEnd: function (swiper) {
        }
    })

  // 轮播图  第六屏
    new Swiper('#swiper-container-2', {
        direction: 'horizontal',
        paginationBulletRender: function () {
            return '';
        },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflow: {
            rotate: 0,
            stretch: -180,
            depth: 60,
            modifier: 2,
            slideShadows: false
        },
    })

  //  轮播  第五屏
  new Swiper('#swiper-container-5', {
    direction: 'horizontal',
    paginationBulletRender: function () {
      return '';
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflow: {
      rotate: 0,
      stretch: -180,
      depth: 60,
      modifier: 2,
      slideShadows: false
    },
  })

  // 第二屏手风琴

  $(".feature ul li").on("mouseenter", function(){
    $(this).siblings().addClass("active")
    $(this).addClass("hover")
  })

  $(".feature ul li").on("mouseleave", function(){
    $(this).siblings().removeClass("active")
    $(this).removeClass("hover")
  })

  // 第四屏 卡牌切换
  $(".card-logo").on("click",function(){
    var idx = $(".card-logo").index(this);
    $(".card-content ul:nth-child("+ (idx+1) +")").addClass("active").siblings().removeClass("active");
  })




    var myswiper = new Swiper('#swiper-container-3', {
        direction: 'horizontal',
        paginationBulletRender: function () {
            return '';
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })



    //µÚÈýÆÁµÄhover
    $('.little-title-1').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 1;
    });

    $('.little-title-2').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 2;
    });

    $('.little-title-3').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 3;
    });

    $('.little-title-4').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 4;
    });

    $('#close').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'hidden'});
    });
})