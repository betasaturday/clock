var helper = (function () {
	function extend(Child, Parent) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
		Child.prototype.super = Parent;
	}

	return {
		'extend': extend
	};
}());