import trim from 'lodash/trim';

/**
 * Join field path segments together.
 *
 * @param {...string} segments The path segments to join
 * @return {string} The joined path
 */
export default function (...segments) {
	if (!segments || segments.length === 0)
		return '';
	
	// Trim whitespace and dots
	segments = segments.map(segment => trim(segment, ' .'));
	
	// Join with dots
	return segments.join('.');
}
