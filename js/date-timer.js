DateTimer  = (function () {

	function Constructor (_screen) {
		this.super.call(this, _screen, 24*3600*1000);
		return this;
	}

	helper.extend(Constructor, Timer);

	Constructor.prototype.getTimeString = function (now) {
		return this.super.pad2(now.getDate()) + '/'
			+ this.super.pad2(now.getMonth() + 1) + '/'
			+ now.getFullYear();
	};
	return Constructor;
}());
