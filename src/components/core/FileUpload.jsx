import { useDropzone } from "react-dropzone";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import React from "react";
import styled from "styled-components";

export const FileUpload = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    open,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noClick: true,
  });

  const files = acceptedFiles.map((file) => <li>{file.path}</li>);

  return (
    <>
      <StyledContainer>
        <StyledItem {...getRootProps()}>
          {isDragAccept ? (
            <p>ここにドロップしてね</p>
          ) : (
            <p>
              <StyledIcon>
                <AddPhotoAlternateIcon />
              </StyledIcon>
              ここにファイルをドロップして下さい
              <br />
              <section>
                または、
                <StyledColor onClick={open}>
                  <input {...getInputProps()} />
                  ファイルを選択
                </StyledColor>
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
  border: 2px dashed #eeeeee;
  border-radius: 2px;
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

const StyledColor = styled.span`
  color: blue;
  cursor: pointer;
`;
