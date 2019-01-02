import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import rootReducer from './redux';

const history = createBrowserHistory();
const initialState = Immutable.Map();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(history), initialState, composeEnhancer(applyMiddleware(routerMiddleware(history))));
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
  module.hot.accept('./redux', () => {
    store.replaceReducer(rootReducer(history));
  });
}
