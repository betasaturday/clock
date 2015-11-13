ShortTimer  = (function () {

	function Constructor (_screen) {
		this.super.call(this, _screen, 1000);
	}

	helper.extend(Constructor, Timer);

	Constructor.prototype.getTimeString = function (now) {
		return this.super.pad2(now.getMinutes()) + ':' + this.super.pad2(now.getSeconds());
	};
	return Constructor;
}());
