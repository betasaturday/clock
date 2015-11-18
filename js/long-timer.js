LongTimer  = (function () {

	function Constructor (_screen) {
		this.super.call(this, _screen, 1000);
		return this;
	}

	helper.extend(Constructor, Timer);

	Constructor.prototype.getTimeString = function (now) {
		return this.super.formatWithZeros(now.getHours()) + ':'
			+ this.super.formatWithZeros(now.getMinutes())
			+ ':' + this.super.formatWithZeros(now.getSeconds());
	};
	return Constructor;
}());
