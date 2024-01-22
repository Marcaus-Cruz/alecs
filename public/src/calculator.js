import $ from 'jquery';

class Calculator {
	constructor() {
		console.log(this.CN(), '[constructor]');
		this.createElements();
	}

	CN() {
		return '[Calculator]';
	}

	createElements() {
		console.log(this.CN(), '[createElements]');
		this.$el = $('<div class="calc-container"></div>');
		this.el = this.$el.get(0);
		console.log(this);
	}
}

export default new Calculator();
