import Calculator from './calculator';
import $ from 'jquery';

class App {
	constructor() {
		this.$el = $('#app');
		this.el = this.$el.get(0);
		this.el.append(Calculator.el);
	}

	CN() {
		return '[App]';
	}

	fadeIn() {
		console.log(this.CN(), '[fadeIn]');
		this.$el.addClass('fadeIn');
	}
}

export default new App();
