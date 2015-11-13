Timer  = (function () {

	function Constructor(_screen, _delta) {
		var screen = _screen,
			delta = _delta;

		this.getDelta = function () {
			return delta;
		};

		this.getScreen = function () {
			return screen;
		};

		this.init();

	}


	Constructor.prototype.init = function () {
		this.render();
		setTimeout(this.firstRerender.bind(this), this.getFirstDelay());
	};

	Constructor.prototype.firstRerender = function () {
		setInterval(this.render.bind(this), this.getDelta());
	};

	Constructor.prototype.getFirstDelay = function () {
		var now = new Date(),
			nextInterval = Math.ceil(now/this.getDelta())*this.getDelta();
		return nextInterval - now;
	};

	Constructor.prototype.render = function () {
		this.getScreen().innerHTML = this.getTimeString(new Date());
	};

	Constructor.prototype.getTimeString = function () {
		return '';
	};

	Constructor.pad2 = function (num) {
		var str = String(num);
		if (str.length === 1) {
			str = '0' + str;
		}
		return str;
	};

	return Constructor;

}());
