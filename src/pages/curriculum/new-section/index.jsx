import { Layout, Typography } from "antd";
import styled from "styled-components";
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillEdit,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const NewSection = () => {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle level={2}>Curriculum</PageTitle>
      </PageTitleWrapper>
      <Content>
        <ContentWrapper>
          <Paragraph>
            Start putting together your course by creating sections, lectures
            and practice (quizzes, coding exercises and assignments). Start
            putting together your course by creating sections, lectures and
            practice activities (quizzes, coding exercises and assignments). Use
            your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Section>
            <SectionHeading>
              <span>Section 1: Introduction</span>
              <AiFillEdit />
              <AiFillDelete />
            </SectionHeading>
            <LectureWrapper>
              <Lecture>
                <LectureHeading>
                  <AiFillCheckCircle />
                  <span>Lecture 1: Introduction</span>
                  <AiFillEdit />
                  <AiFillDelete />
                </LectureHeading>
                <AddContentWrapper>
                  <Button>
                    {" "}
                    <AiOutlinePlus />
                    Content
                  </Button>
                  <IoMdArrowDropdown style={{ fontSize: "2rem" }} />
                </AddContentWrapper>
              </Lecture>
              <Button>
                {" "}
                <AiOutlinePlus />
                Curriculum Item
              </Button>
            </LectureWrapper>
          </Section>
        </ContentWrapper>
        <ContentWrapper>
          <Section>
            <NewSectionHeading>
              <span>New Section: </span>
              <input />
            </NewSectionHeading>
            <NewSectionHeading>
              <span> </span>
              <h5>
                What will students be able to do at the end of this section?
              </h5>
            </NewSectionHeading>
            <ButtonGroup>
              <Button>Cancel</Button>
              <Button className="add-section">Add Section</Button>
            </ButtonGroup>
          </Section>
        </ContentWrapper>
      </Content>
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  .add-section {
    background-color: black;
    color: white;
  }
  height: 45%;
  align-items: flex-end;
  margin-right: 1.5rem;
`;

const NewSectionHeading = styled.div`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  gap: 0.5rem;
  padding-left: 1rem;
  margin: 0 auto;
  span {
    width: 15%;
  }
  input {
    width: 79%;
  }
`;

const AddContentWrapper = styled.div`
  height: 70px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionHeading = styled.div`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  gap: 0.5rem;
  padding-left: 1rem;
`;

const LectureHeading = styled.div`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  gap: 0.5rem;
  padding-left: 1rem;
`;

const Lecture = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const LectureWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Button = styled.button`
  border: 1px solid black;
  height: 30px;
  width: fit-content;
  background-color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.25rem;
`;

const ContentWrapper = styled.div`
  margin-bottom: 2rem;
`;

const PageTitleWrapper = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid black;
  border-top-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const PageTitle = styled(Typography.Title)`
  margin: 0;
  margin-left: 1rem;
`;

const Content = styled(Layout.Content)`
  width: 100%;
  padding: 1rem;
  min-height: fit-content;
  div {
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    padding: 0 2rem;
    padding-bottom: 1.5rem;
    div {
      margin-bottom: 0.75rem;
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 1600px) {
    padding: 0 3rem;
    padding-bottom: 2.5rem;
    div {
      margin-bottom: 1.5rem;
      margin-top: 1rem;
    }
  }
`;

const Paragraph = styled(Typography.Paragraph)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
  @media (min-width: 1368px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Section = styled.div`
  border: 1px solid black;
  height: 250px;
  width: 100%;
`;

export default NewSection;
