function launchFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

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

  // 第三屏 切换
  $(".model li.li2 span").on("click", function(){
    var idY = $(".model .li2>span").index(this);
    $(".pic-scroll .txt .txt-bor:nth-child("+ (idY+1) +")").addClass("active").siblings().removeClass("active");

  })

  // 第四屏 卡牌切换
  $(".card-logo").on("click", function(){
    var idx = $(".card-logo").index(this);
    $(".card-content ul:nth-child("+ (idx+1) +")").addClass("active").siblings().removeClass("active");
  })

  // 弹框
  // $(".card-pos ul").on("click", function(){
  //   var idS = $(".card-pos ul").index(this);
  //   $(".swiper-slide-5").addClass("active");

  // })


  // 轮播图  第六屏
    var hehe = new Swiper('#swiper-container-2', {
        direction: 'horizontal',
       /* paginationBulletRender: function () {
            return '';
        },*/
        pagination: '.raiders-pagination',
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

  $(".feature ul li").on("click", function(){
    if($(this).hasClass("hover")){
      $(this).removeClass("hover")
      $(this).siblings().removeClass("active")
    }else{
        $(this).siblings().addClass("active")
        $(this).addClass("hover")
    }
  })




    var myswiper = new Swiper('#swiper-container-3', {
        direction: 'horizontal',
        paginationBulletRender: function () {
            return '';
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })


  // 视频播放
  $(".video-button").on("click",function(event){
    console.log(666)
    $(".play-nomal").css({
      zIndex: '-1'
    });
    // $(".movie #diamond-story").show(400);
    $(".movie #diamond-story")[0].play();
    /*if($("#music")[0].paused == false){
      $("#music")[0].pause();
    }*/
    //让视频全屏自动全屏播放
    launchFullScreen($(".movie #diamond-story")[0]);
    // screen.orientation.lock('landscape');
  });





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