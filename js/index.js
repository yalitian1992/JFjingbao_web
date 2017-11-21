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


  /*判断微信或不是微信*/
    function isWachat (isisWachat, notWachat) {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      isisWachat();
    } else {
      notWachat();
    }
  }

  // 首屏 下载
  $(".downloadBtn .iosBtn").on("click", function(){
    window.open("https://itunes.apple.com/cn/app/%E9%9B%86%E5%88%86%E7%AB%9E%E5%AE%9D/id1253939312?mt=8")
  })
  $(".downloadBtn .androidBtn").on("click", function(){
    isWachat(function(){
      alert("微信内置浏览器暂不支持，请使用其他浏览器下载！")
    },function(){
      window.open("http://action.ihaveu.com/downloadapp/card/android/CardGame.apk")
    })
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





  //  攻击类详情轮播
  var attackSwiper =  new Swiper('.attack-slide', {
        direction: 'horizontal',
       /* paginationBulletRender: function () {
            return '';
        },*/
        paginationClickable: true,
        // pagination: '.attact-pagination',
        nextButton: '.attact-button-next',
        prevButton: '.attact-button-prev',
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

  //  防御类详情轮播
  var defenseSwiper =  new Swiper('.defense-slide', {
    direction: 'horizontal',
    // paginationBulletRender: function () {
    //   return '';
    // },
    // pagination: '.defense-pagination',
    nextButton: '.defense-button-next',
    prevButton: '.defense-button-prev',
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
  //  控制类详情轮播
  var controlSwiper =  new Swiper('.control-slide', {
    direction: 'horizontal',
    // paginationBulletRender: function () {
    //   return '';
    // },
    // pagination: '.control-pagination',
    nextButton: '.control-button-next',
    prevButton: '.control-button-prev',
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


    // 弹框
    $("ul.card1 li").on("click", function(){
      var idx = $("ul.card1 li").index(this);
      attackSwiper.slideTo(idx, 1000, false);

      $(".detailPop").show();
      $(".attack-slide").show();
      $(".attack-slide").siblings('.detail-slide').hide();

    })
    $("ul.card2 li").on("click", function(){
      var idx = $("ul.card2 li").index(this);
      defenseSwiper.slideTo(idx, 1000, false);

      $(".detailPop").show();
      $(".defense-slide").show();
      $(".defense-slide").siblings('.detail-slide').hide();
    })
    $("ul.card3 li").on("click", function(){
      var idx = $("ul.card3 li").index(this);
      controlSwiper.slideTo(idx, 1000, false);

      $(".detailPop").show();
      $(".control-slide").show();
      $(".control-slide").siblings('.detail-slide').hide();
    })



    $(".detailPop").hide(); //要在swiper初始化之后隐藏， 否则seiper初始化会失败




    //关闭弹框
    $(".detailPop .close-btn").on("click", function(){
        $(".detailPop").hide();
    })

























  // 第二屏手风琴

  $(".feature ul li").on("click", function(){
    if($(this).hasClass("hover")){
      $(this).removeClass("hover")
      $(this).siblings().removeClass("active")
    }else{
      if($(this).hasClass("active")){
        $(this).siblings().removeClass("hover")
        $(this).siblings().removeClass("active")
        $(this).removeClass("active")
      }else{
        $(this).siblings().addClass("active")
        $(this).addClass("hover")
      }
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



  // 视频播放
  $(".video-button").on("click",function(event){

    var src = "media/" + $(this).data("videoname") + ".mp4"
    $("video").attr("src", src)
    $('.loading').show();
      $("video")[0].play();
      launchFullScreen($("video")[0]);
      $('video')[0].oncanplay = function(){
          $('.loading').hide();
      }
    // $("video")[0].play();
    //让视频全屏自动全屏播放
    // screen.orientation.lock('landscape');
  });


    //   $('video')[0].addEventListener('canplay',function(){
    //       console.log("可以播放了")
    //       $("video")[0].play();
    //       launchFullScreen($("video")[0]);
    //       console.log("播放了")
    //       $('.loading').hide();
    //   })


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