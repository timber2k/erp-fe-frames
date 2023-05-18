import React from "react";
import styled from "styled-components";
import { Layout, Typography } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

const IntendedContent = () => (
  <>
    <PageTitleWrapper>
      <PageTitle level={2}>Intended Learners</PageTitle>
    </PageTitleWrapper>
    <Content>
      <div>
        <Paragraph>
          The following descriptions will be publicly visible on your Course
          Landing Page and will have a direct impact on your course performance.
          These descriptions will help learners decide if your course is right
          for them.
        </Paragraph>
      </div>
      <div>
        <Title>What will students learn in your course?</Title>
        <Paragraph>
          You must enter at least 4 learning objectives or outcomes that
          learners can expect to achieve after completing your course.
        </Paragraph>
        <ContentForm>
          <input></input>
          <input></input>
          <input></input>
          <AddResponses>
            <AiOutlinePlus />
            Add more to your responses
          </AddResponses>
        </ContentForm>
      </div>
      <div>
        <Title>
          What are the requirements or prerequisites for taking your course?
        </Title>
        <Paragraph>
          List the required skills, experience, tools or equipment learners
          should have prior to taking your course.If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.
        </Paragraph>
        <ContentForm>
          <input></input>
          <AddResponses>
            <AiOutlinePlus />
            Add more to your responses
          </AddResponses>
        </ContentForm>
      </div>
      <div>
        <Title>Who is this course for?</Title>
        <Paragraph>
          Write a clear description of the intended learners for your course who
          will find your course content valuable.This will help you attract the
          right learners to your course.
        </Paragraph>
        <ContentForm>
          <input></input>
          <AddResponses>
            <AiOutlinePlus />
            Add more to your responses
          </AddResponses>
        </ContentForm>
      </div>
    </Content>
  </>
);

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
    padding: 0 3rem;
    padding-bottom: 2.5rem;
    div {
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }
  }
`;

const Paragraph = styled(Typography.Paragraph)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
  input {
    max-width: 400px;
  }
`;

const AddResponses = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  color: #5624d0;
  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export default IntendedContent;
