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

const swiper = new Swiper('.top-nft__collection', {
   slidesPerView: 3,
   spaceBetween: 35,
   breakpoints: {
      1400: {
         slidesPerView: 3,

      },
      1350: {
         slidesPerView: 2.8,

      },
      1260: {
         slidesPerView: 2.65,
      },
      1170: {
         slidesPerView: 2.5,

      },
      1125: {
         slidesPerView: 2.4,

      },
      1070: {
         slidesPerView: 2.27,

      },
      992: {
         slidesPerView: 2.1,
      },
      950: {
         slidesPerView: 2,
      },
      880: {
         slidesPerView: 1.9,
      },
      850: {
         slidesPerView: 1.8,
      },
      700: {
         slidesPerView: 1.6,
      },
      610: {
         slidesPerView: 1.3,
      },
      576: {
         slidesPerView: 1.7,

      },
      550: {
         slidesPerView: 1.6,
      },
      500: {
         slidesPerView: 1.52,
      },
      490: {
         slidesPerView: 1.4,
         spaceBetween: 25,
      },
      450: {
         slidesPerView: 1.3,
         spaceBetween: 25,
      },
      400: {
         slidesPerView: 1.2,
         spaceBetween: 25,
      },
      375: {
         slidesPerView: 1.1,
         spaceBetween: 25,
      },
      0: {
         slidesPerView: 1,
      },
   }
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
      slidesPerView: 3,
      spaceBetween: 35,
      breakpoints: {
         1400: {
            slidesPerView: 3,
   
         },
         1350: {
            slidesPerView: 2.9,
   
         },
         1260: {
            slidesPerView: 2.8,
         },
         1170: {
            slidesPerView: 2.7,

         },
         1125: {
            slidesPerView: 2.5,
   
         },
         1070: {
            slidesPerView: 2.35,
   
         },
         992: {
            slidesPerView: 2.2,
         },
         950: {
            slidesPerView: 2.1,
         },
         880: {
            slidesPerView: 2,
         },
         850: {
            slidesPerView: 1.85,
            spaceBetween: 25,
         },
         700: {
            slidesPerView: 1.78,
            spaceBetween: 25,
         },
         610: {
            slidesPerView: 1.5,
            spaceBetween: 25,
         },
         576: {
            slidesPerView: 1.7,
            spaceBetween: 25,
         },
         550: {
            slidesPerView: 1.65,
            spaceBetween: 25,
         },
         500: {
            slidesPerView: 1.58,
            spaceBetween: 25,
         },
         490: {
            slidesPerView: 1.5,
            spaceBetween: 25,
         },
         450: {
            slidesPerView: 1.45,
            spaceBetween: 25,
         },
         400: {
            slidesPerView: 1.35,
            spaceBetween: 25,
         },
         375: {
            slidesPerView: 1.1,
            spaceBetween: 25,
         },
         0: {
            slidesPerView: 1,
         },
      }
   });

//! ===== sellers__swiper =====
const sellersSwiper = new Swiper('.sellers__swiper', {
   slidesPerView: 3,
   spaceBetween: 35,
   breakpoints: {
      1400: {
         slidesPerView: 3,
      },
      1340: {
         slidesPerView: 2.8,
      },
      1280: {
         slidesPerView: 2.7,
      },
      1220: {
         slidesPerView: 2.55,
      },
      1150: {
         slidesPerView: 2.35,
      },
      1020: {
         slidesPerView: 2.15,
      },
      992: {
         slidesPerView: 2.1,
      },
      850: {
         slidesPerView: 1.8,
      },
      820: {
         slidesPerView: 1.77,
      },
      800: {
         slidesPerView: 1.6,

      },
      768: {
         slidesPerView: 1.9,
         spaceBetween: 25,
      },
      576: {
         slidesPerView: 1.6,
         spaceBetween: 25,
      },
      520: {
         slidesPerView: 1.58,
         spaceBetween: 25,
      },
      490: {
         slidesPerView: 1.45,
         spaceBetween: 25,
      },
      375: {
         slidesPerView: 1.05,

      },
      0: {
         slidesPerView: 1,
      },
   }
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

