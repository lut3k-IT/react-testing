const reducer = (state = 5000, action) => {
  switch (action.type) {
    case 'deposit':
      return state - action.payload;
    case 'withdraw':
      return state + action.payload;
    case 'interest':
      return state * 1.02;
    default:
      return state;
  }
};

export default reducer;
