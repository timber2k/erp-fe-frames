/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";

const UploadFile = ({ paragraph }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <InputWrapper>
        <FileName className="file-selected">
          {selectedFile ? selectedFile.name : "No File Selected"}
        </FileName>
        <FileInput type="file" id="file" onChange={handleFileChange} />
        <SelectButton htmlFor="file">Select File</SelectButton>
      </InputWrapper>
      <Note>{paragraph}</Note>
    </>
  );
};

const Note = styled.p`
  margin-top: 1rem;
  width: 100%;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  background-color: #d9d9d9;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border: 1px solid black;
  .file-selected {
    font-weight: 500;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const SelectButton = styled.label`
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-left: 1px solid black;
`;

const FileName = styled.div`
  margin-left: 10px;
`;

export default UploadFile;
