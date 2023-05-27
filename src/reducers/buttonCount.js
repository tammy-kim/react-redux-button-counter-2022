const buttonCount = (count = 0, action) => {
	switch(action.type) {
        case 'INCREMENT_COUNTER':
            return count + action.payload;
		case 'DECREMENT_COUNTER':
			return count - action.payload;
		default:
			return count;
	}
};

export default buttonCount;