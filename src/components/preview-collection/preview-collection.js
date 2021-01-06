import React from "react";
import "./preview-collection.scss";
import CollectionItem from "../../components/collection-item/collection-item";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 classname="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);
export default PreviewCollection;
