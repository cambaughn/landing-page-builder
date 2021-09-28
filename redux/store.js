import { createStore } from 'redux';
import { pageBuilderApp } from './reducers';

const store = createStore(pageBuilderApp);

export default store;
