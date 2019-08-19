import { createStore } from 'redux';
import homeAction from './actions/homeAction';
import appAction from './actions/appAction';
import newsAction from './actions/newsAction';
import reducers from './reducers/reducers';

const store = createStore(reducers);

store.dispatch(homeAction);
store.dispatch(appAction);
store.dispatch(newsAction);

export default store;
