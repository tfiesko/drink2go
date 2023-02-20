let mainNav = document.querySelector('.main-nav');
let mainNavToggle = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', ()=> {
  if(mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  }

  else {
    mainNav.classList.remove('main-nav--open');
    mainNav.classList.add('main-nav--close');
  }
});

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const customIcon = L.icon({
  iconUrl: './img/Map-Pin.png',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: customIcon,
  }
);

marker.addTo(map);


const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
