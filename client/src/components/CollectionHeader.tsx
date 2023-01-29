function CollectionHeader() {
  return (
    <div className="w-full flex flex-col h-fit px-6 pt-4 pb-2">
      <div className="flex">
        <h1 className="text-4xl font-black truncate leading-loose pb-4">
          your collection 1
        </h1>
      </div>

      <p className="h-fit w-full pb-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a
      </p>
      <span>
        Images: 50 | Last Edited: Dec 1, 2023 | Created: Sep 1, 2023 | #tag1,
        #tag2, #tag3, #tag4, #reallylongtag1, #mediumtag1
      </span>
    </div>
  );
}

export default CollectionHeader;
