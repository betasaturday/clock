Timer  = (function () {

	function Constructor(_screen, _delta) {
		var screen = _screen,
			delta = _delta,
			interval,
			timeout;

		this.getDelta = function () {
			return delta;
		};

		this.getScreen = function () {
			return screen;
		};

		this.setInterval = function (_interval) {
			interval = _interval;
		};
		this.getInterval = function () {
			return interval;
		};
		this.setTimeout = function (_timeout) {
			timeout = _timeout;
		};
		this.getTimeout = function () {
			return timeout;
		};

		this.init();
		return this;
	}


	Constructor.prototype.init = function () {
		this.render();
		this.setTimeout(setTimeout(this.firstRerender.bind(this), this.getFirstDelay()));
	};

	Constructor.prototype.kill = function () {
		clearInterval(this.getInterval());
		clearTimeout(this.getTimeout());
	};

	Constructor.prototype.firstRerender = function () {
		this.setInterval(setInterval(this.render.bind(this), this.getDelta()));
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
