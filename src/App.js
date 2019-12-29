import React, { useState, useEffect } from 'react';
import FsLightbox from "fslightbox-react";
import {Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import _ from 'lodash';

function App() {

  const [images, setImages] = useState([]);
  const [toggler, setToggler] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => {
    const imgs = _.times(100).map((num) => {
      return {
        id: num,
        iconSrc: `https://place-hold.it/600?v=${num}`,
        scaledSrc: `https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg?v=${num}`,
      };
    });

    setImages(imgs);
  }, []);

  return (
    <div className="App">
      <Row className={"PreviewContainerContent"}>
        {
            images.map((img, index) => {
                return (
                    <Col
                        className={"GalleryImageCol"}
                        {...{md: 4, xs: 12, sm: 6, xl: 3, xxl: 2}}
                        key={`Galleryimg-${index}`}
                        widths={["xs", "sm", "md", "lg", "xl", "xxl"]}
                        onClick={() => {
                            setSourceIndex(index);
                            setToggler(!toggler);
                        }}
                    >
                        <img src={img.iconSrc} key={img.id} className={"GalleryImage"} alt="icon"/>
                    </Col>
                );

            })
        }
    </Row>
     <FsLightbox
        toggler={toggler}
        sourceIndex={sourceIndex}
        type={"image"}
        sources={images.map((img) => (img.scaledSrc))}
        thumbs={images.map((img) => img.iconSrc)}
        showThumbsOnMount={true}
        key={images}
    />
    </div>
  );
}

export default App;
