import { IModel } from '../types/types';

export const selectionListener = (models: IModel[]) => {
  const list = [...new Set(models.map((model) => { return model.name; }))];
  const visibles = list.map((listItem) => { return models.find((model) => { return model.name === listItem })?.selected ?? false; });
  // eslint-why NodeListOf<Element> is needed
  // eslint-disable-next-line no-undef
  const setVisible = (button: Element, entities: NodeListOf<Element>, visible: string) => {
    if (visible === 'true') {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
    entities.forEach((entity) => {
      entity.setAttribute('visible', visible);
    });
  }
  list.forEach((item, index) => {
    const button = document.querySelector('#' + item);
    const entities = document.querySelectorAll('.' + item + '-entity');

    if (button && entities) {
      setVisible(button, entities, visibles[index].toString());
      button.addEventListener('click', () => {
        visibles[index] = !visibles[index];
        setVisible(button, entities, visibles[index].toString());
      });
    }
  });
};