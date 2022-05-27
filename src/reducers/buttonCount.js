const buttonCount = (count = 0, action) => {
	if (action.type === 'INCREMENT_COUNTER') {
		return count + action.payload;
	}
	return count;
};

export default buttonCount;