/** By homermoncallo@gmail.com **/
class RippleButton {
    constructor() {
        this.buttons = document.querySelectorAll('.ripple-button');
        this.prepare();
    }
    prepare() {
        this.buttons.forEach(button => {
            button.addEventListener('click', e => {
                const rippleSpan = document.createElement('span');
                rippleSpan.style.top = e.layerY + 'px';
                rippleSpan.style.left = e.layerX + 'px';
                button.appendChild(rippleSpan);
                setTimeout(() => {
                    rippleSpan.style.transform = 'translateX(-50%) translateY(-50%) scale(2.5)';
                }, 50);
                setTimeout(() => {
                    rippleSpan.style.opacity = 0;
                }, 550)
                setTimeout(() => {
                    rippleSpan.remove();
                }, 800)
            });
        });
    }
}

export default RippleButton;