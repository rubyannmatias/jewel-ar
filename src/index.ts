import { appendNavRoutes, addNavListener, replaceAppContent } from './util/navigation.ts';
import { renderWelcome } from './util/welcome.ts';

const startApp = () => {
  window.onpopstate = () => {
    const route = location.pathname;
    replaceAppContent(route);
  };

  appendNavRoutes();
  addNavListener();
  replaceAppContent(location.pathname);

  if (location.pathname === '/') {
    setTimeout(() => {
      renderWelcome();
    }, 500);
  }
};

startApp();