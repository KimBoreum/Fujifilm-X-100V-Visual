// 5초 후 .main-txt aos가 작동되도록
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    AOS.init({
      offset: 300,
      easing: 'ease-out-cubic',
      duration: 2000,
      once: false,
    });
    
    document.querySelector('.main-txt').setAttribute('data-aos', 'fade-right');
  }, 3000); 
});

// .floating:nth-child(4) hover 시 .section2-txt 출력
document.addEventListener('DOMContentLoaded', function() {
  var floatingThird = document.querySelector('.floating:nth-child(4)');
  var section2Txt = document.querySelector('.section2-txt');

  floatingThird.addEventListener('mouseenter', function() {
    section2Txt.style.display = 'block';
  });

  floatingThird.addEventListener('mouseleave', function() {
    section2Txt.style.display = 'none';
  });
});

// 500px 이상일 경우 스크롤 버튼 출력 및 클릭 이벤트
window.onscroll = function() {
  if (window.scrollY > 500) { 
    document.getElementById("scrolltop").style.display = "block"; 
  } else {
    document.getElementById("scrolltop").style.display = "none"; 
  }
};

document.getElementById("scrolltop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});