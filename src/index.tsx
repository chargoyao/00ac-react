import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Typescript'
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
