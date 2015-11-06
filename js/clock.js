function Clock (screen) {
    'use strict';

    
    var self = this,
		mode;
	
	this.init = function () {
		mode = 'short';
	    updateDateTime(this.getDateTimeString());
		screen.addEventListener('click', leftClickHandler, false);
		screen.addEventListener('contextmenu', rightClickHandler, false);
	};
    this.getDateTimeString = function () {
        var now = new Date();
        if (mode === 'short') {
            return helper.getShortTime(now);
        } else if (mode === 'long') {
            return helper.getLongTime(now);
        } else {
            return helper.getDateString(now);
        }
    };
	this.isShowingTime  = function () {
        return mode !== 'date';
    };
	
	this.init();
	
	function updateDateTime () {
		screen.innerHTML = self.getDateTimeString();
	}
	
    function changeBetweenShortAndLongForm () {
        if (mode === 'short') {
            mode = 'long';
		} else if (mode === 'long') {
            mode = 'short';
		}
    }
	
    function changeBetweenDateAndShortForm () {
        if (mode === 'date') {
            mode = 'short';
        } else {
            mode = 'date';
        }
    }

    function getDelta () {
        if (mode === 'short') {
            return 60000;
        } else if (mode === 'long') {
            return 1000;
        } else {
            return null;
        }
    };
	
	function leftClickHandler(e) {
        changeBetweenShortAndLongForm();
        updateDateTime(self.getDateTimeString());
		
        setInterval(function () {
            updateDateTime(self.getDateTimeString());
        }, getDelta());
    }

    function rightClickHandler(e) {
        e.preventDefault();
        changeBetweenDateAndShortForm();
        updateDateTime(self.getDateTimeString());
		
        if (self.isShowingTime()) {
            setInterval(function () {
                updateDateTime(self.getDateTimeString());
            }, getDelta());
        }
    }
}

    


