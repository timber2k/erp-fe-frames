/* eslint-disable react/prop-types */
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
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

const CurriculumItems = ({
  newLecture,
  newQuiz,
  newCodingExercises,
  newAssignment,
  setNewLecture,
  setNewQuiz,
  setNewCodingExercises,
  setNewAssignment,
  setShowItems,
}) => (
  <AddingItems
    borderStyle={
      newLecture || newQuiz || newCodingExercises || newAssignment
        ? "solid"
        : "dotted"
    }
  >
    <AiOutlineClose className="icon" onClick={() => setShowItems(false)} />
    {!newLecture && !newQuiz && !newCodingExercises && !newAssignment && (
      <>
        <Item onClick={() => setNewLecture(true)}>
          <AiOutlinePlus />
          <span>Lecture</span>
        </Item>
        <Item onClick={() => setNewQuiz(true)}>
          <AiOutlinePlus />
          <span>Quiz</span>
        </Item>
        <Item onClick={() => setNewCodingExercises(true)}>
          <AiOutlinePlus />
          <span>Coding Exercises</span>
        </Item>
        <Item onClick={() => setNewAssignment(true)}>
          <AiOutlinePlus />
          <span>Assignment</span>
        </Item>
      </>
    )}
    {newLecture && (
      <NewItem>
        <NewItemWrapper>
          <NewItemLabel>New Lecture: </NewItemLabel>
          <NewItemInput type="text" />
        </NewItemWrapper>
        <ButtonWrapper>
          <Button className="cancel" onClick={() => setNewLecture(false)}>
            Cancel
          </Button>
          <Button onClick={() => setNewLecture(false)}>Add Lecture</Button>
        </ButtonWrapper>
      </NewItem>
    )}
    {newQuiz && (
      <NewItem>
        <NewItemWrapper>
          <NewItemLabel>New Quiz: </NewItemLabel>
          <QuizWrapper>
            <NewItemInput type="text" />
            <EditorWrapper>
              <CKEditor
                config={editorConfig}
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
              />
            </EditorWrapper>
          </QuizWrapper>
        </NewItemWrapper>
        <ButtonWrapper>
          <Button className="cancel" onClick={() => setNewQuiz(false)}>
            Cancel
          </Button>
          <Button onClick={() => setNewQuiz(false)}>Add Quiz</Button>
        </ButtonWrapper>
      </NewItem>
    )}
    {newCodingExercises && (
      <NewItem>
        <NewItemWrapper>
          <NewItemLabel>New Coding Exercises: </NewItemLabel>
          <NewItemInput type="text" />
        </NewItemWrapper>
        <ButtonWrapper>
          <Button
            className="cancel"
            onClick={() => setNewCodingExercises(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => setNewCodingExercises(false)}>
            Add Coding Exercises
          </Button>
        </ButtonWrapper>
      </NewItem>
    )}
    {newAssignment && (
      <NewItem>
        <NewItemWrapper>
          <NewItemLabel>New Assignment: </NewItemLabel>
          <NewItemInput type="text" />
        </NewItemWrapper>
        <ButtonWrapper>
          <Button className="cancel" onClick={() => setNewAssignment(false)}>
            Cancel
          </Button>
          <Button onClick={() => setNewAssignment(false)}>
            Add Assignment
          </Button>
        </ButtonWrapper>
      </NewItem>
    )}
  </AddingItems>
);

const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditorWrapper = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  width: auto;
  min-height: 5rem;
  .ck-editor__editable {
    min-height: 5rem;
  }
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
  .cancel {
    background: white;
    color: black;
  }
`;

const Button = styled.div`
  border: 1px solid black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: black;
  color: white;
  width: fit-content;
`;

const NewItemInput = styled.input`
  font-size: 1.25rem;
  line-height: 1.5rem;
  width: 100%;
`;

const NewItemLabel = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: inline-block;
  flex-shrink: 0;
`;

const NewItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const NewItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #a435f0;
  font-size: 1.25rem;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  margin-left: 2rem;
`;

const AddingItems = styled.div`
  border: 1px ${(props) => props.borderStyle} black;
  min-height: 3rem;
  margin: 0 1rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  position: relative;
  .icon {
    position: absolute;
    right: 0;
    top: -1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export default CurriculumItems;
