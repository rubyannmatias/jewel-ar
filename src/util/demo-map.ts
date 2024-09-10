import sapphireEarringThumb from '../static/assets/thumbnail-sapphire-earring.png';
import sapphireEarring from '../static/assets/3D-sapphire-earring.glb';
import rubyDiamondThumb from '../static/assets/thumbnail-ruby-diamond-necklace.png';
import rubyDiamondNecklace from '../static/assets/3D-ruby-dia-necklace.glb';
import demoGoldNoseRingThumb from '../static/assets/thumbnail-gold-nosering.png';
import demoGoldNoseRing from '../static/assets/3D-gold-nosering.glb';
// import demoGoldNoseRingThumb from '../static/assets/nose.png';
// import demoGoldNoseRing from '../static/assets/nose.glb';
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
    anchorIndex: 363,
    rotation: '0.2 130 20',
    position: '0 0 0',
    scale: '0.005 0.005 0.005',
    entityName: 'demoGoldNoseRing-entity',
    modelId: 'demoGoldNoseRingModel',
    modelSrc: demoGoldNoseRing,
    selected: true,
  }
];