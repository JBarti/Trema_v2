import { combineReducers } from 'redux';
import appReducer from './appReducer';
import homeReducer from './homeReducer';
import newsReducer from './newsReducer';

const reducers = combineReducers({
  home: homeReducer,
  app: appReducer,
  news: newsReducer,
});

export default reducers;
