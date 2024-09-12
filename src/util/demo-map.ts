import sapphireEarringThumb from '../static/assets/thumbnail-sapphire-earring.png';
import sapphireEarring from '../static/assets/3D-sapphire-earring.glb';
import rubyDiamondThumb from '../static/assets/thumbnail-ruby-diamond-necklace.png';
import rubyDiamondNecklace from '../static/assets/3D-ruby-dia-necklace.glb';
import demoGoldNoseRingThumb from '../static/assets/thumbnail-nose-ring.png';
import demoGoldNoseRing from '../static/assets/3D-nose-ring.glb';
import demoDiamondCrownThumb from '../static/assets/thumbnail-royal-sapphire-crown.png';
import demoDiamondCrown from '../static/assets/3D-royal-sapphire-crown.glb';
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
    selected: false,
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
    selected: false,
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
  },
  {
    name: 'demoGoldNoseRing',
    type: 'nosering',
    thumbnailSrc: demoGoldNoseRingThumb,
    anchorIndex: 326,
    rotation: '5 5 -1',
    position: '-0.1 -0.07 -0.3',
    scale: '0.0011 0.0011 0.0011',
    entityName: 'demoGoldNoseRing-entity',
    modelId: 'demoGoldNoseRingModel',
    modelSrc: demoGoldNoseRing,
    selected: false,
  },
  {
    name: 'demoDiamondCrown',
    type: 'crown',
    thumbnailSrc: demoDiamondCrownThumb,
    anchorIndex: 9,
    rotation: '0.1 -0 0',
    position: '0 0.6 -0',
    scale: '1 1 1',
    entityName: 'demoDiamondCrown-entity',
    modelId: 'demoDiamondCrownModel',
    modelSrc: demoDiamondCrown,
    selected: true,
  }
];