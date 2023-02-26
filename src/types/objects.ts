export interface Collection {
  _id: string;
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  tags: string[];
  cover: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  _id: string;
  url: string;
  name: string;
  description: string;
  source: string;
  tags: string[];
  transforms: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  googleId: string;
  collectionIds: string[];
  createdAt: string;
  updatedAt: string;
}
