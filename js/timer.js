Timer  = (function () {

	function Constructor(_screen, _delta) {
		var attributes = {
            screen: _screen,
			delta: _delta,
			interval: null,
			timeout: null
        };
        
        this.get = function (key)  {
            return attributes[key];
        };
        
        this.set = function (key, value) {
            attributes[key] = value;
        };

		this.init();
		return this;
	}


	Constructor.prototype.init = function () {
		this.render();
		this.set('timeout', setTimeout(this.firstRerender.bind(this), this.getFirstDelay()));
	};

	Constructor.prototype.kill = function () {
		clearInterval(this.get('interval'));
		clearTimeout(this.get('timeout'));
	};

	Constructor.prototype.firstRerender = function () {
		this.set('interval', setInterval(this.render.bind(this), this.get('delta')));
	};

	Constructor.prototype.getFirstDelay = function () {
		var now = new Date(),
			nextInterval = Math.ceil(now/this.get('delta'))*this.get('delta');
		return nextInterval - now;
	};

	Constructor.prototype.render = function () {
		this.get('screen').innerHTML = this.getTimeString(new Date());
	};

	Constructor.prototype.getTimeString = function () {
		return '';
	};

	Constructor.formatWithZeros = function (num) {
        var result;
        if (num <= 9) {
            result = '0' + num;
        } else {
            result = String(num);
        }
		return result;
	};

	return Constructor;

}());
