/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfig = {
  ckfinder: {
    options: {
      height: "8rem",
    },
  },
};

const ArticleContentType = ({ setShowArticleType }) => (
  <ArticleWrapper>
    <Heading>Text</Heading>
    <EditorWrapper>
      <CKEditor
        config={editorConfig}
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
      />
    </EditorWrapper>
    <ButtonWrapper>
      <Button onClick={() => setShowArticleType(false)}>Save</Button>
    </ButtonWrapper>
  </ArticleWrapper>
);

const EditorWrapper = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  min-height: 5rem;
  .ck-editor__editable {
    min-height: 5rem;
  }
`;

const ArticleWrapper = styled.div`
  margin: 1rem;
  height: calc(100% - 2rem);
  margin-top: 0;
  padding-top: 1rem;
`;

const Heading = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.div`
  border: 1px solid black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: black;
  color: white;
  width: fit-content;
`;

export default ArticleContentType;
