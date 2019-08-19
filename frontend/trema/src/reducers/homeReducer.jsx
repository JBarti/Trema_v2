const stateDefault = {
  homeAction: null,
};

const homeReducer = (state = stateDefault, action) => {
  if (action.type === 'HomeComponent') {
    return state + action.payload;
  }
  return state;
};

export default homeReducer;
