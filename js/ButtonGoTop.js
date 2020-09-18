/** By homermoncallo@gmail.com **/
class ButtonGoTop {
	constructor(selector) {
		this.button = document.querySelector(selector);
		this.handleClick = this.handleClick.bind(this);
		this.handleWindowScroll = this.handleWindowScroll.bind(this);
		this.events();
		this.handleWindowScroll();
	}
	events() {
		this.button.addEventListener('click', this.handleClick);
		addEventListener('scroll', this.handleWindowScroll);
	}
	handleClick() {
		scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	handleWindowScroll() {
		if(scrollY > 300) {
			this.button.classList.add('show');
		}else {
			this.button.classList.remove('show');
		}
	}
}

export default ButtonGoTop;