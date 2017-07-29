import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import photo from 'reduxDuck/photo.duck';
import beer from 'reduxDuck/beer.duck';
import chat from 'reduxDuck/chat.duck';
import form from 'reduxDuck/form.duck';

const rootReducer = {
	photo,
	beer,
	chat,
	form
};

// const reducer = combineReducers(auth);
const reducer = combineReducers(rootReducer);

const middlewares = applyMiddleware(promiseMiddleware());

/* safari 에서 에러 */
// const configureStore = createStore(reducer, compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

/* 해결법 */
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
const configureStore = createStore(reducer, composeEnhancers(middlewares));

export default configureStore;