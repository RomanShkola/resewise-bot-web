export function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}

export const updateSelected = (items, newItem, flag) => {

	if (newItem in items) {
		return Object.keys(items).reduce((object, key) => {
			if (key !== newItem) {
				object[key] = items[key]
			}
			return object
		}, {})
	} else {
		return {...items, [newItem]: true }
	}

};

export const arrayToMap = (array) => {
	return array.map((value, index) => ({ val: value, i: index })).reduce((object, key) => {
		object[key.i] = key.val
		return object
	}, {})
}