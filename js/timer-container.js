TimerContainer = (function () {
	function Constructor(timerContainerEl) {
		var attributes = {
            mode: 'short',
            containerEl: timerContainerEl,
			currentTimer: new ShortTimer(timerContainerEl)
        };

		timerContainerEl.addEventListener('click', leftClickHandler.bind(this));
		timerContainerEl.addEventListener('contextmenu', rightClickHandler.bind(this));

        this.get = function (key) {
            return attributes[key];
        };
        
        this.set = function(key, value) {
            attributes[key] = value;
        };
        
	}

	Constructor.prototype.changeMode = function (newMode) {
		var currentTimer = this.get('currentTimer');
		this.set('mode', newMode);
		currentTimer.kill();
		if (newMode === 'date') {
			this.set('currentTimer', new DateTimer(this.get('containerEl')));
		} else if (newMode === 'short') {
			this.set('currentTimer', new ShortTimer(this.get('containerEl')));
		} else{
			this.set('currentTimer', new LongTimer(this.get('containerEl')));
		}

	};

	function leftClickHandler() {
		var newMode;
		if (this.get('mode') !== 'date') {
			newMode = (this.get('mode') === 'short' ? 'long' : 'short');
			this.changeMode(newMode);
		}
	}

	function rightClickHandler(e) {
		var newMode;
		e.preventDefault();
		if (this.get('mode') === 'date') {
			newMode = 'short';
		} else {
			newMode = 'date';
		}
		this.changeMode(newMode);
	}

	return Constructor;

}());
