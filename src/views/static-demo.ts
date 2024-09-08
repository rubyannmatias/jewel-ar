import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';

import { models } from '../util/demo-map';
import { IModelContent } from '../types/types';

let includedModels: string[] = [];
const uniqueModels: Array<IModelContent | null> = models.map((model) => {
  if (!includedModels.includes(model.name)) {
    includedModels.push(model.name);
    return {
      thumbnail: `<img id="${model.name}" src="${model.thumbnailSrc}"/>`,
      asset: `<a-asset-item id="${model.modelId}" src="${model.modelSrc}"></a-asset-item>`,
    }
  }
  return null;
}).filter((model) => { return model !== null });

export const staticContent = `
  <div class="demo-container">
    <div class="options-panel">
      ${
        uniqueModels.map((model) => { if (model) return model.thumbnail; }).join('')
      }
    </div>
    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="headModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/sparkar/headOccluder.glb"></a-asset-item>
        ${
          uniqueModels.map((model) => { if (model) return model.asset; }).join('')
        }
      </a-assets>
      <a-camera active="false" position="0 0 0"></a-camera>
      <!-- head occluder -->
      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model mindar-face-occluder position="0 -0.3 0.15" rotation="0 0 0" scale="0.065 0.065 0.065"
          src="#headModel"></a-gltf-model>
      </a-entity>
      ${
        models.map((model) => {
          return `
            <a-entity mindar-face-target="anchorIndex: ${model.anchorIndex}">
              <a-gltf-model
                rotation="${model.rotation}"
                position="${model.position}"
                scale="${model.scale}"
                src="#${model.modelId}"
                class="${model.entityName}"
                visible="false"
              ></a-gltf-model>
            </a-entity>
          `;
        }).join('')
      }
    </a-scene>
  </div>
`;
