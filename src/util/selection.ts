const selectionListener = () => {
  const list = ['glasses2', 'hat2', 'earring', 'sapphireEarring', 'rubyDiamondNecklace'];
  const visibles = [false, false, false, true, false];
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

document.addEventListener('DOMContentLoaded', function () {
  selectionListener();
});