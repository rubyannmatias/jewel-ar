# jewel-ar

- This repository contains a demo of a regular and individualized augmented reality experience using mind-ar and aframe.
- It does face landmark detection based on this [TFJS map](https://github.com/tensorflow/tfjs-models/blob/master/face-landmarks-detection/mesh_map.jpg).
- We have provided a static demo where the assets (3D models and thumbnail) are sourced within the repo.
- We have also provided a dynamic demo where users can put any valid URL of their own if they want to experience it using their own 3D models and thumbnail images.
- The dynamic demo contains a user control panel where they can adjust the scale, rotation, and position for a truly individualized augmented reality experience.

## Development Setup

### Install

`npm ci`.

**This must be performed before either lint, build or dev can be used!**

### Lint

`npm run lint -- --fix`

### Build

`npm run build`

### Dev

`npm run dev` will run it on your localhost at the default Vite port 5173.