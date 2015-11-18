ShortTimer  = (function () {

	function Constructor (_screen) {
		this.super.call(this, _screen, 60*1000);
		return this;
	}

	helper.extend(Constructor, Timer);

	Constructor.prototype.getTimeString = function (now) {
		return this.super.formatWithZeros(now.getHours())
            + ':' + this.super.formatWithZeros(now.getMinutes());
	};
	return Constructor;
}());
