import Navbar from './Navbar.js';
import Slider from './Slider.js';
import RippleButton from './RippleButton.js';
import ButtonGoTop from './ButtonGoTop.js';

(function() {

    new Navbar('#main-navbar');
    new Slider('.slider');
    new RippleButton();
    new ButtonGoTop('.go-top');

    /** Generar Año del Footer */
    const year = new Date();
    document.querySelector('.year').textContent = year.getFullYear();

})();