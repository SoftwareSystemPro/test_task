import React, { useState } from "react";
import { Image } from "antd";
import { Col, Row } from "react-grid-system";
import "./styles.css";


const ImageUpload = ({
  HandleChange,
  files,
  selectImage,
  elem
}) => {

  return (
    <>
      <div className="upload_row_wrapp">
        <Row>
          <Col lg={12}>
            <div className="upload_cover">
              {
                // dataProject?.Loading == true ? (
                //   <div className="upload_spinss">
                //     <Spin indicator={antIcon} />
                //   </div>
                // ) :
                selectImage ? (
                  <Image
                    style={{
                      aspectRatio: "1 / 1",
                      borderRadius: "20px",
                      zIndex: "99999999",
                    }}
                    src={selectImage}

                  />
                ) : (
                  <Image
                    style={{
                      aspectRatio: "1 / 1",
                      borderRadius: "20px",
                      zIndex: "99999999",
                    }}
                    src={elem}
                  />
                )}
            </div>
            <div className="upload_plus_box">
              <>
                <input type="file" id="file1" onChange={HandleChange} />
                <label for="file1" className="custom-file-upload">
                  <span className="upload_span-download">
                    <i className='bx bxs-plus-circle'></i>
                  </span>
                </label>
              </>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ImageUpload;
