const stateDefault = {
  appAction: null,
};

const appReducer = (state = stateDefault, action) => {
  if (action.type === 'AppComponent') {
    return state + action.payload;
  }
  return state;
};

export default appReducer;
