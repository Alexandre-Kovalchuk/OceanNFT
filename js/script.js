const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__menu-body');

const firstImg = document.querySelector('.collections__first-img');
const secondImg = document.querySelector('.collections__second-img');
const rightBtn = document.querySelectorAll('.collections__right-btn');
const leftBtn = document.querySelectorAll('.collections__lft-btn');

const marketBtn = document.querySelector('.market-btn'),
   collectiblesBtn = document.querySelector('.collectibles-btn'),
   supportBtn = document.querySelector('.support-btn'),
   legalBtn = document.querySelector('.legal-btn'),
   followBtn = document.querySelector('.follow-btn');

const infoMarket = document.querySelector('.market'),
   infoCollectibles = document.querySelector('.collectibles'),
   infoSupport = document.querySelector('.support'),
   infoLegal = document.querySelector('.legal'),
   infofFollow = document.querySelector('.follow');

//! ===== topNFT__swiper =====
const topNFT = new Swiper('.topNFT__swiper', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,

   // Navigation arrows
   navigation: {
      nextEl: '.topNFT__btn, .topNFT__explore',
   },

});

//! ===== меню бургер =====
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

//! ===== Змінює картинку при кліку на кнопку =====
leftBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      firstImg.style.display = 'block';
      secondImg.style.display = 'none';
   });
});

rightBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      firstImg.style.display = 'none';
      secondImg.style.display = 'block';
   });
});
//! ===== account__swiper =====
const accountSwiper = new Swiper('.account__swiper', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,

   // Navigation arrows
   navigation: {
      nextEl: '.account__btn, .account__explore',
   },
});
//! ===== sellers__swiper =====
const sellersSwiper = new Swiper('.sellers__swiper', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   // centeredSlides: true,
   // centeredSlidesBounds: true,
   // Navigation arrows
   navigation: {
      nextEl: '.sellers__btn-explore',
   },
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 768px
      490: {
         slidesPerView: 1,
      },
   },
});

//! ===== Accardion =====

marketBtn.addEventListener("click", showAccordionMarket);

function showAccordionMarket() {
   infoMarket.classList.toggle('hidden');
   marketBtn.classList.toggle('rotate');
}

collectiblesBtn.addEventListener('click', () => {
   infoCollectibles.classList.toggle('hidden');
   collectiblesBtn.classList.toggle('rotate');
});

supportBtn.addEventListener('click', () => {
   infoSupport.classList.toggle('hidden');
   supportBtn.classList.toggle('rotate');
});

legalBtn.addEventListener('click', () => {
   infoLegal.classList.toggle('hidden');
   legalBtn.classList.toggle('rotate');
});

followBtn.addEventListener('click', () => {
   infofFollow.classList.toggle('hidden');
   followBtn.classList.toggle('rotate');
});

window.addEventListener("resize", () => {
   if (window.innerWidth <= 992) {
      infoMarket.classList.add('hidden');
      infoCollectibles.classList.add('hidden');
      infoSupport.classList.add('hidden');
      infoLegal.classList.add('hidden');
      infofFollow.classList.add('hidden');
   }
});