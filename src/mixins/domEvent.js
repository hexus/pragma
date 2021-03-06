/**
 * A mixin for firing DOM events from a Riot tag.
 *
 * Adapted from cognitom's Riot mixin pack.
 *
 * @mixin
 * @see {@link https://github.com/cognitom/riot-mixin-pack}
 */
export default {
	/**
	 * Trigger a DOM event on the root element of the tag.
	 *
	 * @param {string}       eventName      - The name of the event to fire
	 * @param {Event|Object} [event]        - The event object to dispatch, or data to attach to the created event.
	 * @param {boolean}      [bubbles=true] - Whether the event should bubble up the DOM.
	 */
	triggerDom: function (eventName, event, bubbles) {
		bubbles = bubbles !== undefined ? bubbles : true;
		
		// Create the event if one isn't given
		if (!event || !(event instanceof Event)) {
			if (typeof CustomEvent === 'function') {
				// Standard browsers
				event = new CustomEvent(eventName, {
					bubbles:    bubbles,
					cancelable: true,
					detail:     event
				});
			} else {
				// IE >=9
				let detail = event;
				event = document.createEvent('CustomEvent');
				event.initCustomEvent(eventName, bubbles, true, detail);
			}
		}
		
		this.root.dispatchEvent(event);
	}
};
