TimerContainer = (function () {
	function Constructor(screen) {
		var mode = 'short',
			currentTimer = new ShortTimer(screen);

		screen.addEventListener('click', leftClickHandler.bind(this));
		screen.addEventListener('contextmenu', rightClickHandler.bind(this));

		this.getMode = function () {
			return mode;
		};
		this.setMode = function (newMode) {
			mode = newMode;
		};
		this.getScreen = function () {
			return screen;
		};
		this.getCurrentTimer = function () {
			return currentTimer;
		};
		this.setCurrentTimer = function (newTimer) {
			currentTimer = newTimer;
		};
		this.setTimer = function (newTimer) {
			currentTimer = newTimer;
		};
	}

	Constructor.prototype.changeMode = function (newMode) {
		var currentTimer = this.getCurrentTimer();
		this.setMode(newMode);
		currentTimer.kill();
		if (newMode === 'date') {
			this.setCurrentTimer(new DateTimer(this.getScreen()));
		} else if (newMode === 'short') {
			this.setCurrentTimer(new ShortTimer(this.getScreen()));
		} else{
			this.setCurrentTimer(new LongTimer(this.getScreen()));
		}

	};

	function leftClickHandler() {
		var newMode;
		if (this.getMode() !== 'date') {
			newMode = (this.getMode() === 'short' ? 'long' : 'short');
			this.changeMode(newMode);
		}
	}

	function rightClickHandler(e) {
		var newMode;
		e.preventDefault();
		if (this.getMode() === 'date') {
			newMode = 'short';
		} else {
			newMode = 'date';
		}
		this.changeMode(newMode);
	}

	return Constructor;

}());
