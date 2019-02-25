import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import rootReducer from "./players/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import serviceWorker from './serviceWorker';
import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const ProviderApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(ProviderApp, rootElement);
serviceWorker();
