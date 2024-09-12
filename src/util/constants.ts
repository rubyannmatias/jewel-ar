import { homeContent } from '../views/landing.ts';
import { staticContent } from '../views/static-demo.ts';

export const landingTitle = 'Welcome to your Virtual Showroom!';
export const landingSubtitle = 'Check out the latest products.';

export const routes: { [key: string]: { name: string, content: string } } = {
  '/': {
    name: 'Home',
    content: homeContent,
  },
  '/static': {
    name: 'Static Demo',
    content: staticContent, 
  },
  '/dynamic': {
    name: 'Dynamic Demo',
    content: '', 
  },
};

// Please do not delete, CDN URLs can be used for the custom user input demo
export const sampleGlasses = {
  name: 'glasses2',
  type: 'glasses',
  thumbnailSrc: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/thumbnail.png',
  anchorIndex: 168,
  rotation: '0 -90 0',
  position: '0 -0.3 0',
  scale: '0.55 0.55 0.55',
  entityName: 'glasses2-entity',
  modelId: 'glassesModel2',
  modelSrc: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/scene.gltf',
  selected: false,
};

// Please do not delete, CDN URLs can be used for the custom user input demo
export const sampleEarring = [
  {
    name: 'pearlEarring',
    type: 'earrings',
    thumbnailSrc: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/thumbnail.png',
    anchorIndex: 127,
    rotation: '-0.1 -0 0',
    position: '0 -0.3 -0.3',
    scale: '0.05 0.05 0.05',
    entityName: 'pearlEarring-entity',
    modelId: 'pearlEarringModel',
    modelSrc: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/scene.gltf',
    selected: false,
  },
  {
    name: 'pearlEarring',
    type: 'earrings',
    thumbnailSrc: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/thumbnail.png',
    anchorIndex: 356,
    rotation: '-0.1 -0 0',
    position: '0 -0.3 -0.3',
    scale: '0.05 0.05 0.05',
    entityName: 'pearlEarring-entity',
    modelId: 'pearlEarringModel',
    modelSrc: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/scene.gltf',
    selected: false,
  }
];

export enum DEMO_MODEL_TYPES {
  HAT = 'hat',
  GLASSES = 'glasses',
  NOSE_RING = 'nosering',
  EARRINGS = 'earrings',
  NECKLACE = 'necklace',
}

export const FACE_LANDMARK_MAP_DEFAULTS = {
  'hat': {
    name: 'demo',
    type: 'hat',
    thumbnailSrc: '',
    anchorIndex: 10,
    rotation: '0 -0 0',
    position: '0 -0.2 -0.5',
    scale: '0.008 0.008 0.008',
    entityName: 'demo-entity',
    modelId: 'demoModel',
    modelSrc: '',
    selected: false,
  },
  'glasses': {
    name: 'demo',
    type: 'glasses',
    thumbnailSrc: '',
    anchorIndex: 168,
    rotation: '0 -90 0',
    position: '0 -0.3 0',
    scale: '0.55 0.55 0.55',
    entityName: 'demo-entity',
    modelId: 'demoModel',
    modelSrc: '',
    selected: false,
  },
  'nose ring': {
    name: 'demo',
    type: 'nose ring',
    thumbnailSrc: '',
    anchorIndex: 1,
    rotation: '0 0 0',
    position: '0 0 0',
    scale: '0.1 0.1 0.1',
    entityName: 'demo-entity',
    modelId: 'demoModel',
    modelSrc: '',
    selected: false,
  },
  'earrings': {
    name: 'demo',
    type: 'earrings',
    thumbnailSrc: '',
    anchorIndex: 127, // and 356 for both ears
    rotation: '-0.1 -0 0',
    position: '0 -0.3 -0.3',
    scale: '0.05 0.05 0.05',
    entityName: 'demo-entity',
    modelId: 'demoModel',
    modelSrc: '',
    selected: false,
  },
  'necklace': {
    name: 'demo',
    type: 'necklace',
    thumbnailSrc: '',
    anchorIndex: 152,
    rotation: '0.1 -0 0',
    position: '0 -0.4 -0.4',
    scale: '0.95 0.95 0.95',
    entityName: 'demo-entity',
    modelId: 'demoModel',
    modelSrc: '',
    selected: false,
  },
}