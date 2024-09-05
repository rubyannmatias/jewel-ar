// import './style.css'
import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';
import sapphireEarringThumb from './static/assets/thumbnail-sapphire-earring.png';
import sapphireEarring from './static/assets/3D-sapphire-earring.glb';
// import solitaireDiamondRing from './static/assets/3D-solitaire-dia-ring.3dm';
import rubyDiamondThumb from './static/assets/thumbnail-ruby-diamond-necklace.png';
import rubyDiamondNecklace from './static/assets/3D-ruby-dia-necklace.glb';

document.querySelector<HTMLBodyElement>('body')!.innerHTML = `
  <div class="example-container">
    <div class="options-panel">
      <img id="hat2"
        src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat2/thumbnail.png" />
      <img id="glasses2"
        src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/thumbnail.png" />
      <img id="earring"
        src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/thumbnail.png" />
      <img id="sapphireEarring"
        src="${sapphireEarringThumb}" />
      <img id="rubyDiamondNecklace"
        src="${rubyDiamondThumb}" />
    </div>
    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="headModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/sparkar/headOccluder.glb"></a-asset-item>
        <a-asset-item id="glassesModel2"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/scene.gltf"></a-asset-item>
        <a-asset-item id="hatModel2"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat2/scene.gltf"></a-asset-item>
        <a-asset-item id="earringModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/scene.gltf"></a-asset-item>
        <a-asset-item id="sapphireEarringModel"
          src="${sapphireEarring}"></a-asset-item>
        <a-asset-item id="rubyDiamondNecklaceModel"
          src="${rubyDiamondNecklace}"></a-asset-item>
      </a-assets>
      <a-camera active="false" position="0 0 0"></a-camera>
      <!-- head occluder -->
      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model mindar-face-occluder position="0 -0.3 0.15" rotation="0 0 0" scale="0.065 0.065 0.065"
          src="#headModel"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 10">
        <a-gltf-model rotation="0 -0 0" position="0 -0.2 -0.5" scale="0.008 0.008 0.008" src="#hatModel2"
          class="hat2-entity" visible="false"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model rotation="0 -90 0" position="0 -0.3 0" scale="0.6 0.6 0.6" src="#glassesModel2"
          class="glasses2-entity" visible="false"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 127">
        <a-gltf-model rotation="-0.1 -0 0" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" src="#earringModel"
          class="earring-entity" visible="false"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 356">
        <a-gltf-model rotation="0.1 -0 0" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" src="#earringModel"
          class="earring-entity" visible="false"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 127">
        <a-gltf-model rotation="-0.1 -0 0" position="0 -0.3 -0.3" scale="0.1 0.1 0.1" src="#sapphireEarringModel"
          class="sapphireEarring-entity" visible="false"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 356">
        <a-gltf-model rotation="0.1 -0 0" position="0 -0.3 -0.3" scale="0.1 0.1 0.1" src="#sapphireEarringModel"
          class="sapphireEarring-entity" visible="false"></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 152">
        <a-gltf-model rotation="0.1 -0 0" position="0 -0.4 -0.4" scale="0.95 0.95 0.95" src="#rubyDiamondNecklaceModel"
          class="rubyDiamondNecklace-entity" visible="false"></a-gltf-model>
      </a-entity>
    </a-scene>
  </div>
`;
