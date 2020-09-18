/**
 * Slider by homermoncallo@gmail.com
 */
class Slider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.sliderWrapper = this.slider.querySelector('.slider-wrapper');
        this.sliderItems = Array.from(this.slider.querySelectorAll('.slider-item'));
        this.controlsArea = this.slider.parentElement.querySelector('.slider-controls');
        this.handleControlsClick = this.handleControlsClick.bind(this);
        this.state = 0;
        this.prepare();
        this.events();
    }
    prepare() {
        const sliderWrapperSize = this.sliderItems.length * 100;
        this.sliderWrapper.style.width = `${sliderWrapperSize}%`;
        this.sliderItems.forEach(item => {
            item.style.width = `${100 / this.sliderItems.length}%`;
        });
    }
    events() {
        this.controlsArea.addEventListener('click', this.handleControlsClick);
    }
    handleControlsClick(e) {
        const moveSlide = () => {
            this.sliderItems.forEach(item => {
                item.style.transform = `translateX(-${this.state * 100}%)`;
            });
        }

        if(e.target.classList.contains('next') || e.target.classList.contains('prev')) {
            if(e.target.classList.contains('next')) {
                if(this.state !== this.sliderItems.length - 1 ) {
                    this.state += 1;
                    moveSlide();
                }
            }else if(e.target.classList.contains('prev')) {
                if(this.state !== 0) {
                    this.state -= 1;
                    moveSlide();
                }
            }
            
            this.setDisabled();
        }
    }
    setDisabled() {
        if(this.state === this.sliderItems.length - 1) {
            this.controlsArea.querySelector('.next').setAttribute('disabled', true);
        }else {
            this.controlsArea.querySelector('.next').removeAttribute('disabled');
        }
        if(this.state === 0) {
            this.controlsArea.querySelector('.prev').setAttribute('disabled', true);
        }else {
            this.controlsArea.querySelector('.prev').removeAttribute('disabled');
        }
    }
}

export default Slider;