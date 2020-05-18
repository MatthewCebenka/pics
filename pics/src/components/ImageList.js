import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  console.log(images);
  return (
    <div className="image-list">
      <div>{images}</div>
    </div>
  );
};

export default ImageList;
