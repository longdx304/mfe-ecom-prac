import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// create mount function to mount the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if in dev mode and running in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// if in production mode, export mount for container to call
export { mount };
