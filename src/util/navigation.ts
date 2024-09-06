import { routes } from './constants';
import { models } from './demo-map';
import { selectionListener } from './selection';
import { renderWelcome } from './welcome';

export const appendNavRoutes = () => {
  const nav = document.querySelector('#nav');
  if (nav) {
    const navFragment = document.createDocumentFragment();
    Object.keys(routes).forEach((route: string) => {
      const { name } = routes[route];
  
      const linkElement = document.createElement('a')
      linkElement.href = route;
      linkElement.textContent = name;
      linkElement.className = 'nav-link';
      navFragment.appendChild(linkElement);
    });
  
    nav.append(navFragment);
  }
};

export const replaceAppContent = (route: string) => {
  const app = document.querySelector('#app');
  if (app) {
    app.innerHTML = routes[route].content
    selectionListener(models);
  }
};

export const goToRoute = (e: Event) => {
  if (e.target instanceof HTMLAnchorElement) {
    const route = e.target.pathname;
    history.pushState({}, '', route);
    replaceAppContent(route);

    if (route === '/') {
      setTimeout(() => {
        renderWelcome();
      }, 1000);
    }
  }
};

export const addNavListener = () => {
  const nav = document.querySelector('#nav');
  if (nav) {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      const { href } = e.target as HTMLAnchorElement;
      if (href) {
        goToRoute(e);
      }
    });
  }
};