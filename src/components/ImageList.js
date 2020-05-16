import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const image = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        url={image.urls.regular}
        description={image.description}
      />
    );
  });
  return <div className="image-list">{image}</div>;
};
export default ImageList;
