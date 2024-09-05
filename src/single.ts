// import './style.css'
import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';

document.querySelector<HTMLBodyElement>('body')!.innerHTML = `
  <a-scene mindar-face embedded vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
    <a-camera active="false" position="0 0 0"></a-camera>
    <a-entity mindar-face-target="anchorIndex: 1">
      <a-sphere color="green" radius="0.1"></a-sphere>
    </a-entity>
  </a-scene>
`;
