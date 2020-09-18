/**
 * Navbar by homermoncallo@gmail.com
 */
class Navbar {
    constructor(selector) {
        this.toggleButton = document.querySelector(`[data-navbar-id="${selector}"]`);
        this.navbar = document.querySelector(selector);
        this.handleClick = this.handleClick.bind(this);
        this.events();
    }
    events() {
        this.toggleButton.addEventListener('click', this.handleClick);
    }
    handleClick() {
        this.navbar.classList.toggle('show');
        if(this.navbar.classList.contains('show')) {
            this.toggleButton.setAttribute('aria-expanded', true);
        }else {
            this.toggleButton.setAttribute('aria-expanded', false);
        }
    }
}

export default Navbar;