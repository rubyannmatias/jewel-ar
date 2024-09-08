import sapphireEarringThumb from '../static/assets/thumbnail-sapphire-earring.png';
import sapphireEarring from '../static/assets/3D-sapphire-earring.glb';
import rubyDiamondThumb from '../static/assets/thumbnail-ruby-diamond-necklace.png';
import rubyDiamondNecklace from '../static/assets/3D-ruby-dia-necklace.glb';
import { IModel } from '../types/types';

export const models: IModel[] = [
  {
    name: 'sapphireEarring',
    type: 'earrings',
    thumbnailSrc: sapphireEarringThumb,
    anchorIndex: 127,
    rotation: '-0.1 -0 0',
    position: '0 -0.3 -0.3',
    scale: '0.2 0.2 0.2',
    entityName: 'sapphireEarring-entity',
    modelId: 'sapphireEarringModel',
    modelSrc: sapphireEarring,
    selected: true,
  },
  {
    name: 'sapphireEarring',
    type: 'earrings',
    thumbnailSrc: sapphireEarringThumb,
    anchorIndex: 356,
    rotation: '-0.1 -0 0',
    position: '0 -0.3 -0.3',
    scale: '0.2 0.2 0.2',
    entityName: 'sapphireEarring-entity',
    modelId: 'sapphireEarringModel',
    modelSrc: sapphireEarring,
    selected: true,
  },
  {
    name: 'rubyDiamondNecklace',
    type: 'necklace',
    thumbnailSrc: rubyDiamondThumb,
    anchorIndex: 152,
    rotation: '0.1 -0 0',
    position: '0 -0.4 -0.4',
    scale: '0.95 0.95 0.95',
    entityName: 'rubyDiamondNecklace-entity',
    modelId: 'rubyDiamondNecklaceModel',
    modelSrc: rubyDiamondNecklace,
    selected: false,
  }
];