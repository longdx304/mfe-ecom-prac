import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// create mount function to mount the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if in dev mode and running in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// if in production mode, export mount for container to call
export { mount };
