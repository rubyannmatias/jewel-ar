import { Vector3 } from 'three';

export const preferencesListener = () =>   {
  const toggleScale = (e: Event) => {
    const target = e.target as HTMLButtonElement;
    const dynamicModels = document.querySelectorAll('a-gltf-model[data-id="dynamicModelEntity"]');
    
    if (target && dynamicModels && dynamicModels.length) {
      dynamicModels.forEach((dynamicModel) => {
        const currentScale = dynamicModel.getAttribute('scale') as unknown as Vector3;

        if (currentScale) {
          const { x, y, z } = currentScale;
  
          switch (target.id) {
            case 'increaseScale':
              dynamicModel.setAttribute('scale', `${x + 0.1} ${y + 0.1} ${z + 0.1}`);
              break;
            case 'decreaseScale':
              dynamicModel.setAttribute('scale', `${x - 0.1} ${y - 0.1} ${z - 0.1}`);
              break;
            default:
              break
          }
        }
      });
    }
  };

  const toggleRotation = (e: Event) => {
    const target = e.target as HTMLButtonElement;
    const dynamicModels = document.querySelectorAll('a-gltf-model[data-id="dynamicModelEntity"]');

    if (target && dynamicModels && dynamicModels.length) {
      dynamicModels.forEach((dynamicModel) => {
        const currentRotation = dynamicModel.getAttribute('rotation') as unknown as Vector3;

        if (currentRotation) {
          const { x, y, z } = currentRotation;

          switch (target.id) {
            case 'rotateLeft':
              dynamicModel.setAttribute('rotation', `${x} ${y - 10} ${z}`);
              break;
            case 'rotateRight':
              dynamicModel.setAttribute('rotation', `${x} ${y + 10} ${z}`);
              break;
            default:
              break;
          }
        }
      });
    }
  };

  const changePosition = (e: Event) => {
    const target = e.target as HTMLButtonElement;
    const dynamicModels = document.querySelectorAll('a-gltf-model[data-id="dynamicModelEntity"]');
    
    if (target && dynamicModels && dynamicModels.length) {
      dynamicModels.forEach((dynamicModel) => {
        const currentPosition = dynamicModel.getAttribute('position') as unknown as Vector3;

        if (currentPosition) {
          const { x, y, z } = currentPosition;

          switch (target.id) {
            case 'moveUp':
              dynamicModel.setAttribute('position', `${x} ${y + 0.1} ${z}`);
              break;
            case 'moveDown':
              dynamicModel.setAttribute('position', `${x} ${y - 0.1} ${z}`);
              break;
            default:
              break;
          }
        }
      });
    }
  }

  const increaseScale = document.querySelector('button#increaseScale');
  const decreaseScale = document.querySelector('button#decreaseScale');
  const leftRotation = document.querySelector('button#rotateLeft');
  const rightRotation = document.querySelector('button#rotateRight');
  const moveUp = document.querySelector('button#moveUp');
  const moveDown = document.querySelector('button#moveDown');

  if (increaseScale && decreaseScale) {
    increaseScale.addEventListener('click', toggleScale);
    decreaseScale.addEventListener('click', toggleScale);
  }

  if (leftRotation && rightRotation) {
    leftRotation.addEventListener('click', toggleRotation);
    rightRotation.addEventListener('click', toggleRotation);
  }

  if (moveUp && moveDown) {
    moveUp.addEventListener('click', changePosition);
    moveDown.addEventListener('click', changePosition);
  }
};