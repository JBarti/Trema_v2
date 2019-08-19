const stateDefault = {
  newsAction: null,
};

const newsReducer = (state = stateDefault, action) => {
  if (action.type === 'NewsComponent') {
    return state + action.payload;
  }
  return state;
};

export default newsReducer;
