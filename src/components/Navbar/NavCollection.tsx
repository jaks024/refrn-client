import { NavCollectionItem } from './NavCollectionItem';

export function NavCollection() {
  return (
    <div className="px-6 grow">
      <h2 className="font-bold text-xl leading-loose">your collections</h2>
      <div>
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
        <NavCollectionItem />
      </div>
    </div>
  );
}
