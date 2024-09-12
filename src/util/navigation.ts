import { IModel } from '../types/types';
import { dynamicContent } from '../views/dynamic-demo';
import { FACE_LANDMARK_MAP_DEFAULTS, routes } from './constants';
import { models } from './demo-map';
import { preferencesListener } from './preferences';
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

      if (route === '/dynamic') {
        linkElement.style.cursor = 'not-allowed';
        linkElement.style.pointerEvents = 'none';
      }

      navFragment.appendChild(linkElement);
    });
  
    nav.append(navFragment);
  }
};

export const replaceAppContent = (route: string, modelData?: Array<{ name: string, value: string }> ) => {
  const app = document.querySelector('#app');
  if (modelData) {
    const model = Object.values(modelData).findIndex((item) => {return item.name === '3D-model'});
    const thumbnail = Object.values(modelData).findIndex((item) => {return item.name === 'model-thumbnail'});
    const productPlacement = Object.values(modelData).findIndex((item) => {return item.name === 'product-placement'});

    const defaultModel = FACE_LANDMARK_MAP_DEFAULTS[(productPlacement
      ? modelData[productPlacement].value
      : 'nose ring') as keyof typeof FACE_LANDMARK_MAP_DEFAULTS
    ];

    let dynamicModels: IModel[] = [];
    defaultModel.modelSrc = modelData[model].value || '';
    defaultModel.thumbnailSrc = modelData[thumbnail].value || '';
    defaultModel.selected = true;
    dynamicModels.push(defaultModel);

    // Special case for earrings
    if (modelData[productPlacement].value === 'earrings') {
      const otherEarModel = { ...defaultModel };
      otherEarModel.modelSrc = modelData[model].value || '';
      otherEarModel.thumbnailSrc = modelData[thumbnail].value || '';
      otherEarModel.selected = true;
      otherEarModel.anchorIndex = 356;
      otherEarModel.rotation = '0.1 -0 0';
      dynamicModels.push(otherEarModel);
    }

    if (app) {
      app.innerHTML = dynamicContent(dynamicModels);
      selectionListener(dynamicModels);
      preferencesListener();
    }
  } else {
    if (app) {
      app.innerHTML = routes[route].content
      selectionListener(models);
    }
  }
};

export const goToRoute = (e: Event, modelData?: Array<{ name: string, value: string }>) => {
  if (e.target instanceof HTMLAnchorElement) {
    const route = e.target.pathname;
    history.pushState({}, '', route);
    replaceAppContent(route);

    if (route === '/') {
      setTimeout(() => {
        renderWelcome();
      }, 1000);
    }
  } else if (e.target instanceof HTMLButtonElement) {
    history.pushState({}, '', '/dynamic');
    replaceAppContent('/dynamic', modelData);
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