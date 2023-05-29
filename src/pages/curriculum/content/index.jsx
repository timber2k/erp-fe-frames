import { useState } from "react";
import styled from "styled-components";
import { Layout, Typography } from "antd";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillCheckCircle,
  AiOutlinePlus,
  AiOutlineCaretDown,
  AiOutlineClose,
} from "react-icons/ai";

import VideoContentType from "./components/video-content";
import ArticleContentType from "./components/article-content";
import SelectContentType from "./components/select-content";
import LectureDescription from "./components/lecture-description";
import LectureResources from "./components/lecture-resources";

const CurriculumContent = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showVideoType, setShowVideoType] = useState(false);
  const [showArticleType, setShowArticleType] = useState(false);

  return (
    <>
      <PageTitleWrapper>
        <PageTitle level={2}>Curriculum</PageTitle>
      </PageTitleWrapper>
      <Content>
        <div>
          <Paragraph>
            Start putting together your course by creating sections, lectures
            and practice activities (quizzes, coding exercises and assignments).
            Use your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </Paragraph>
        </div>
        <div>
          <Section>
            <SectionHeading>
              <span>Section 1: Introduction</span>
              <AiFillEdit className="icon" />
              <AiFillDelete className="icon" />
            </SectionHeading>
            <Lecture>
              <LectureHeading>
                <LectureTitle>
                  <AiFillCheckCircle className="icon" />
                  <span>Lecture 1: Introduction</span>
                  <AiFillEdit className="icon" />
                  <AiFillDelete className="icon" />
                </LectureTitle>
                {!showResources && !showContent && (
                  <ContentButton>
                    <CustomButton
                      onClick={() => {
                        setShowContent(true),
                          setShowDescription(false),
                          setShowResources(false);
                      }}
                    >
                      <AiOutlinePlus className="icon" />
                      Content
                    </CustomButton>
                    <AiOutlineCaretDown />
                  </ContentButton>
                )}
              </LectureHeading>
              <LectureContent>
                {!showDescription && !showResources && !showContent && (
                  <ButtonGroup>
                    <CustomButton onClick={() => setShowDescription(true)}>
                      <AiOutlinePlus className="icon" />
                      Description
                    </CustomButton>
                    <CustomButton onClick={() => setShowResources(true)}>
                      <AiOutlinePlus className="icon" />
                      Resources
                    </CustomButton>
                  </ButtonGroup>
                )}
                {showDescription && (
                  <LectureDescription setShowDescription={setShowDescription} />
                )}
                {showResources && (
                  <LectureResources setShowResources={setShowResources} />
                )}
                {showContent && (
                  <LectureResourcesWrapper>
                    <ResourcesTag>
                      {showVideoType
                        ? "Add Video"
                        : showArticleType
                        ? "Add Article"
                        : "Select content type"}
                      <AiOutlineClose
                        onClick={() => (
                          setShowContent(false),
                          setShowVideoType(false),
                          setShowArticleType(false)
                        )}
                        className="icon"
                      />
                    </ResourcesTag>
                    {!showVideoType && !showArticleType && (
                      <SelectContentType
                        setShowArticleType={setShowArticleType}
                        setShowVideoType={setShowVideoType}
                      />
                    )}
                    {showArticleType && (
                      <ArticleContentType
                        setShowArticleType={setShowArticleType}
                      />
                    )}
                    {showVideoType && <VideoContentType />}
                  </LectureResourcesWrapper>
                )}
              </LectureContent>
            </Lecture>
            <CustomButton className="add-curriculum">
              <AiOutlinePlus className="icon" />
              Curriculum Item
            </CustomButton>
          </Section>
        </div>
        <CustomButton className="add-section">
          <AiOutlinePlus className="icon" />
          Section
        </CustomButton>
      </Content>
    </>
  );
};

const ResourcesTag = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: -2.25rem;
  padding: 0.25rem 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  gap: 1rem;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-bottom: 0;
  .icon {
    cursor: pointer;
  }
`;

const LectureResourcesWrapper = styled.div`
  position: relative;
  margin: 1rem;
  margin-top: 0;
  height: fit-content;
  border: 1px solid black;
  border-top: 0;
  .article {
    margin-top: 0;
    padding-top: 1rem;
  }
`;

const SectionHeading = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const Lecture = styled.div`
  border: 1px solid black;
  margin: 1rem;
  margin-top: 0;
  height: calc(100% - 5rem);
`;

const LectureTitle = styled.div`
  height: 100%;
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
  display: flex;
  align-items: center;
  gap: 1rem;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const LectureContent = styled.div`
  height: fit-content;
`;

const ButtonGroup = styled.div`
  margin: 1rem;
  height: 5rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomButton = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  padding: 0.25rem 0.25rem 0.25rem 0;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const ContentButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  .button {
    border: 1px solid black;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
`;

const LectureHeading = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
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
  .add-section {
    width: fit-content;
    padding: 0.25rem 1rem;
  }
  .add-curriculum {
    width: fit-content;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  & > div {
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    padding: 0 2rem;
    padding-bottom: 1.5rem;
    & > div {
      margin-bottom: 0.75rem;
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 1600px) {
    padding: 0 3rem;
    padding-bottom: 2.5rem;
    & > div {
      margin-bottom: 1.5rem;
      margin-top: 1rem;
    }
  }
`;

const Paragraph = styled(Typography.Paragraph)`
  margin-top: 2rem;
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
  width: 100%;
  height: fit-content;
`;

export default CurriculumContent;
