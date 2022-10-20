

$(document).ready(function(){

  let gnb = $('#h_bottom .gnb')

  gnb.hover(function(){//마우스 올렸을 때
    $('#h_bottom').animate({'height':'320px'});
  },function(){//마우스 아웃시 동작
    $('#h_bottom').stop().animate({'height':'46px'});
  });

  // 서브메뉴 fadeOut하기
  gnb.hover(function(){//마우스 올렸을 때
    $('.sub li a').fadeIn();
  },function(){//마우스 아웃시 동작
    $('.sub li a').fadeOut();
  });


  // 메인슬라이드 구현

  let mslide = $('.m_slide ul')
  let s_img = $('.m_slide img').width();
  
  console.log(s_img)
  
  $(window).resize(function(){
    $('.m_slide li').css('width','100%')
    $('.m_slide img').css('width','100%')
    s_img = $('.m_slide img').width();
    mslide.css('margin-left',s_img*-1)
  })


  // 마지막 슬라이드를 맨 처음 슬라이드 앞으로 자리를 옮긴다.
  $('.m_slide ul li:last-child').insertBefore('.m_slide ul>li:first-child')
  mslide.css('margin-left',s_img*-1)

  // 함수 - 왼쪽 방향으로 움직이는 슬라이드
  function moveLeft() {
    mslide.animate({'margin-left':s_img*-2},500,function(){
      $('.m_slide ul li:first-child').insertAfter('.m_slide ul>li:last-child');
      mslide.css('margin-left',s_img*-1)
    })
  }

  // let Timer = setInterval(moveLeft, 3000)

  moveLeft()

  // 함수 - 오른쪽 방향으로 움직이는 슬라이드
  function moveRight() {
    mslide.animate({'margin-left':'0px'},500,function(){
      $('.m_slide ul li:last-child').insertBefore('.m_slide ul>li:first-child')
      mslide.css('margin-left',s_img*-1)
    })
  }

  // 좌, 우 버튼 클릭시 해당 방향으로 움직에게 하기
  l_btn = $('.m_slide i.fa-angle-left')
  r_btn = $('.m_slide i.fa-angle-right')
  play_btn = $('.play i.fa-play')
  pause_btn = $('.play i.fa-pause')

  l_btn.click(function(){
    moveRight()
  })
  
  r_btn.click(function(){
    moveLeft()
  })

  // 좌우버튼에 마우스 오버시 시간을 제거하고 다시 우웃을 하면 시간을 생성하여 움직이게 하기
  Timer = setInterval(moveLeft, 3000)
  // $('.m_slide i.fas').hover(function(){
  //   clearInterval(Timer);
  // },function(){
  //   Timer = setInterval(moveLeft, 3000)
  // })

  play_btn.click(function(){
    Timer = setInterval(moveLeft, 3000)
  })

  pause_btn.click(function(){
    clearInterval(Timer);
  })
})