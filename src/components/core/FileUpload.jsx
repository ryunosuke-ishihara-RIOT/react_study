import React from "react";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import styled from "styled-components";

export const FileUpload = (props) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noClick: true,
  });

  const files = acceptedFiles.map((file) => <li>{file.path}</li>);

  return (
    <>
      <StyledContainer>
        <StyledItem {...getRootProps({ className: "dropzone" })}>
          {isDragAccept && <p>ここにドロップしてね</p>}
          {isDragReject && <p>それは、jpegでもpngでもないよ</p>}
          {!isDragActive && (
            <p>
              <StyledIcon>
                <AddPhotoAlternateIcon style={{ fontSize: 60 }} />
              </StyledIcon>
              ここにファイルをドロップして下さい
              <br />
              <section>
                または、
                <a href="!#" onClick={open}>
                  <input {...getInputProps()} />
                  ファイルを選択
                </a>
                してください
              </section>
            </p>
          )}
        </StyledItem>
      </StyledContainer>
      <ul>{files}</ul>
    </>
  );
};

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  height: 148px;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;
`;
const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  left: 47%;
`;
