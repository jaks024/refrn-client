export interface CollectionControlBarTabItem {
  id: number;
  title: string;
  onSwitch: (changeTo: number) => void;
}
