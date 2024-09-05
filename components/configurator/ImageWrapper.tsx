import React from "react";

type ImageWrapperProps = {
  selectedOptions: Record<string, string>;
};

const ImageWrapper: React.FC<ImageWrapperProps> = ({ selectedOptions }) => {
  // const imageUrl = `/images/${selectedOptions.color}_${selectedOptions.size}.png`
  const imageUrl = `/placeholder.png`;

  return (
    <div className="w-full h-full max-h-full flex flex-col gap-8 items-center justify-center bg-muted text-light text-3xl text-primary">
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="w-2/3 h-2/3 bg-no-repeat bg-center bg-contain"
      ></div>
      {selectedOptions.color}
    </div>
  );
};

export default ImageWrapper;
