var helper = (function () {
	function _addZeroToStart(num) {
        return (num < 10 ? '0' : '') + num;
    }

    function _getShortTime (now) {
        return _addZeroToStart(now.getHours()) + ':'
                    + _addZeroToStart(now.getMinutes());
    }
    function _getLongTime (now) {
        return _getShortTime(now) + ':'
            + _addZeroToStart(now.getSeconds());
    }
    function _getDateString (now) {
        return _addZeroToStart(now.getMonth() + 1) + '/'
                + _addZeroToStart(now.getDate()) + '/'
                + now.getFullYear();
    }
	
	return {
		addZeroToStart: _addZeroToStart,
		getShortTime: _getShortTime,
		getLongTime: _getLongTime,
		getDateString: _getDateString
	};
})();