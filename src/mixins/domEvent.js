/**
 * A mixin for firing DOM events from a Riot tag.
 *
 * Adapted from cognitom's Riot mixin pack.
 *
 * @see {@link https://github.com/cognitom/riot-mixin-pack}
 */
export default {
	/**
	 * Trigger a DOM event on the root element of the tag..
	 *
	 * @param {string} eventName - The name of the event to fire
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
