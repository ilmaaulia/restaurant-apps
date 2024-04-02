import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/components.js';
import './utils/theme-mode.js';
import App from './views/app.js';

const app = new App({
  button: document.querySelector('.menu-toggle'),
  drawer: document.querySelector('.menu'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
