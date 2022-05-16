import styled from "styled-components";
import React from "react";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ImageGallery = ({ images, numberOfColumns }) => {
  const columnsClass = `w-${numberOfColumns}/12`;
  return (
    <GalleryContainer className="flex flex-wrap items-center">
      <div className={columnsClass}>
        {images.map(
          (image) =>
            image &&
            image.src && (
              <img src={image.src} alt={image.alt || "Gallery Image"} />
            )
        )}
      </div>
    </GalleryContainer>
  );
};
