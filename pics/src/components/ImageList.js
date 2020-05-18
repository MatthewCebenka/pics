import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  console.log(images);
  return (
    <div className="image-list">
      <ImageCard />
      <div>{images}</div>
    </div>
  );
};

export default ImageList;
