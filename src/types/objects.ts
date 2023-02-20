export interface Collection {
  _id: string;
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  cover: string;
}

export interface Image {
  _id: string;
  url: string;
  name: string;
  description: string;
  source: string;
  tags: string[];
  transforms: string[];
  createdDate: Date;
}
