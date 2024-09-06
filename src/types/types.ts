export interface IModel {
  name: string;
  type: string;
  thumbnailSrc: string;
  anchorIndex: number;
  rotation: string;
  position: string;
  scale: string;
  entityName: string;
  modelId: string;
  modelSrc: string;
  selected: boolean;
}

export interface IModelContent {
  thumbnail: string;
  asset: string;
}