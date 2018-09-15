// @see {@link https://github.com/cognitom/riot-mixin-pack}
export default {
	/**
	 * Trigger Event on DOM (root element of the tag).
	 *
	 * @param { string } eventName - the name of the event. ex: 'change'
	 */
	triggerDom: function (eventName) {
		let event;
		
		if (typeof Event === 'function') {
			// Standard browsers
			event = new Event(eventName);
		} else {
			// IE 9 ~ 11
			event = document.createEvent('Event');
			event.initEvent(eventName, true, true);
		}
		
		this.root.dispatchEvent(event);
	}
};
