import React from "react";
import { Layout, Typography } from "antd";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const IntendedContent = () => {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle level={2}>Intended Learners</PageTitle>
      </PageTitleWrapper>
      <Content>
        <ContentWrapper>
          <Paragraph>
            The following descriptions will be publicly visible on your Course
            Landing Page and will have a direct impact on your course
            performance. These descriptions will help learners decide if your
            course is right for them.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Title>What will students learn in your course?</Title>
          <Paragraph>
            You must enter at least 4 learning objectives or outcomes that
            learners can expect to achieve after completing your course.
          </Paragraph>
          <ContentForm>
            <input></input>
            <input></input>
            <input></input>
            <AddResponse>
              <AiOutlinePlus />
              Add more to your responses
            </AddResponse>
          </ContentForm>
        </ContentWrapper>
        <ContentWrapper>
          <Title>
            What are the requirements or prerequisites for taking your course?
          </Title>
          <Paragraph>
            List the required skills, experience, tools or equipment learners
            should have prior to taking your course.If there are no
            requirements, use this space as an opportunity to lower the barrier
            for beginners.
          </Paragraph>
          <ContentForm>
            <input></input>
            <AddResponse>
              <AiOutlinePlus />
              Add more to your responses
            </AddResponse>
          </ContentForm>
        </ContentWrapper>
        <ContentWrapper>
          <Title>Who is this course for?</Title>
          <Paragraph>
            Write a clear description of the intended learners for your course
            who will find your course content valuable.This will help you
            attract the right learners to your course.
          </Paragraph>
          <ContentForm>
            <input></input>
            <AddResponse>
              <AiOutlinePlus />
              Add more to your responses
            </AddResponse>
          </ContentForm>
        </ContentWrapper>
      </Content>
    </>
  );
};

const PageTitleWrapper = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  border-top-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const PageTitle = styled(Typography.Title)`
  margin: 0;
  margin-left: 1rem;
`;

const Content = styled(Layout.Content)`
  width: 100%;
  padding: 0 3rem;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
  border: 1px solid black;
`;

const ContentWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Paragraph = styled(Typography.Paragraph)`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Title = styled.span`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
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

const AddResponse = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  color: #5624d0;
`;

export default IntendedContent;
