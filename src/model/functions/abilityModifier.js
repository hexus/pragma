import {util} from "../../mixins/util";

export default function (score) {
	if (!util.isNumeric(score))
		return null;
	
	let modifier = Math.floor((score / 2) - 5);
	
	if (!util.isNumeric(modifier))
		return null;
	
	return modifier;
}
