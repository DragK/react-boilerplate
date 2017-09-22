import * as React from 'react';
import { render } from 'react-dom';
import { Hello } from './components/Hello';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/index' ;

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Root = (
  <Provider store={createStoreWithMiddleware(Reducer)}>
    <div>
      test
      </div>
  </Provider>
);

render(Root, document.getElementById('root'));
