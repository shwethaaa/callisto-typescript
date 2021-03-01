import React from "react";
import Image from "../../atoms/Image/Image";

interface galleryProps {
  length: number;
}

const Gallery = (props: galleryProps) => {
  return (
    <React.Fragment>
      <div className="row">
        {[...Array(props.length)].map((data) => {
          return (
            <div className="col-md-3 col-3 mt-5">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQAX8u81iwc0h-xu69mQol12ul3TZKozCtQ&usqp=CAU"
                width="100%"
              ></Image>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
