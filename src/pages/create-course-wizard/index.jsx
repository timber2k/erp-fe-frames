import { Layout, Carousel, Input, Select } from "antd";
import styled from "styled-components";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineListAlt } from "react-icons/md";
import { useRef, useState } from "react";

const CreateCourseWizard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();

  const handleContinue = () => {
    const nextSlide = currentSlide + 1;
    carouselRef.current.goTo(nextSlide, false);
    setCurrentSlide(nextSlide);
  };

  const handlePrevious = () => {
    const previousSlide = currentSlide - 1;
    carouselRef.current.goTo(previousSlide, false);
    setCurrentSlide(previousSlide);
  };

  return (
    <ScreenLayout>
      <TopBar>
        <Steps>Step {currentSlide + 1} of 3</Steps>
        <Exit>Exit</Exit>
      </TopBar>
      <Content>
        <Carousel ref={carouselRef}>
          <Page>
            <Page1Heading>
              First, Let&apos;s find out what type of course you&apos;re making.
            </Page1Heading>
            <Page1Content>
              <Content1Element>
                <AiOutlineVideoCameraAdd className="icon" />
                <span>Course</span>
                <p>
                  Create rich learning experiences with the help of video
                  lectures, quizzes, coding exercises, etc.
                </p>
              </Content1Element>
              <Content1Element>
                <MdOutlineListAlt className="icon" />
                <span>Practice test</span>
                <p>
                  Help students prepare for certification exams by providing
                  practice questions.
                </p>
              </Content1Element>
            </Page1Content>
          </Page>
          <Page>
            <PageTitle>How about a working title?</PageTitle>
            <PageSubTitle>
              It&apos;s ok if you can&apos;t think of a good title now. You can
              change it later.
            </PageSubTitle>
            <PageInput>
              <Input placeholder="e.g. Learn Python from scratch" />
            </PageInput>
          </Page>
          <Page>
            <PageTitle>
              What category best fits the knowledge you&apos;ll share?
            </PageTitle>
            <PageSubTitle>
              If you&apos;re not sure about the right category, you can change
              it later.
            </PageSubTitle>
            <PageSelect>
              <Select
                className="select"
                showSearch
                size="large"
                placeholder="Select your course category"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </PageSelect>
          </Page>
        </Carousel>
      </Content>
      <BottomBar page={currentSlide}>
        {currentSlide !== 0 && (
          <BottomButton className="previous" onClick={handlePrevious}>
            Previous
          </BottomButton>
        )}
        {currentSlide !== 2 && (
          <BottomButton className="continue" onClick={handleContinue}>
            Continue
          </BottomButton>
        )}
      </BottomBar>
    </ScreenLayout>
  );
};

const ScreenLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  background: white;
`;

const TopBar = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  z-index: 10;
`;

const Steps = styled.div`
  padding: 0.5rem;
`;

const Exit = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: #5624d0;
`;

const Content = styled.div`
  width: 100%;
  font-size: 3rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  min-height: calc(100% - 10rem);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: 2;
  .ant-carousel {
    height: 100%;
    width: 100%;
  }
`;

const Page = styled.div`
  min-height: calc(100vh - 10rem);
  background: white;
`;

const Page1Heading = styled.div`
  margin-top: 8rem;
  font-size: 1.75rem;
  line-height: 2rem;
  padding: 0 1rem;
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media (min-width: 1368px) {
    margin-top: 5rem;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const Page1Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    gap: 5rem;
    padding: 0px;
  }
`;

const Content1Element = styled.div`
  width: 300px;
  height: 300px;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 1rem 0;
    width: 3rem;
    height: 3rem;
  }
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
  & > p {
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: center;
    margin: 0 1rem 1rem 1rem;
    @media (min-width: 768px) {
      margin: 0 3rem 5rem 3rem;
    }
  }
  @media (min-width: 768px) {
    height: fit-content;
    .icon {
      width: auto;
      height: auto;
    }
  }
`;

const PageTitle = styled.div`
  margin-top: 8rem;
  font-size: 1.75rem;
  line-height: 2rem;
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media (min-width: 1368px) {
    margin-top: 5rem;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const PageSubTitle = styled.div`
  font-size: 1.25rem;
  lin-height: 1.5rem;
  display: flex;
  height: fit-content;
  padding: 0 2rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const PageInput = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  & > input {
    height: 3rem;
    width: 80%;
    font-size: 1.25rem;
    lin-height: 1.5rem;
  }

  @media (min-width: 992px) {
    & > input {
      height: 4rem;
      width: 60%;
      font-size: 1.5rem;
      lin-height: 1.75rem;
    }
  }
`;

const PageSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .select {
    width: 60%;
    font-size: 1.5rem;
    lin-height: 1.75rem;
  }
`;

const BottomBar = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.page === 0 ? "flex-end" : "space-between "};
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  .continue {
    background: black;
    color: white;
  }
  .previous {
    background: white;
    color: black;
  }
`;

const BottomButton = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  border: 1px solid black;
`;

export default CreateCourseWizard;
