const stateDefault = {
  imeAction: null,
};

const ImeReducer = (state = stateDefault, action) => {
  if (action.type === 'Ime') {
    return state + action.payload;
  }
  return state;
};


export default ImeReducer;
