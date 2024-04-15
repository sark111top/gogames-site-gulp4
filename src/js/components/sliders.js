import { auto } from '@popperjs/core';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const tariffSlider = new Swiper('.tariff__slider', {
  slidesPerView: 1.5,
  loop: false,
  spaceBetween: 100,
});
const tariffSliderMob = new Swiper('.tariff__slider_mob', {
  slidesPerView: 1,
  loop: false,
  spaceBetween: 100,
});
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true
// });
