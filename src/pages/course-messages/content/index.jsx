import { Layout, Typography } from "antd";
import styled from "styled-components";

const CourseMessagesContent = () => {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle level={2}>Course Messages</PageTitle>
      </PageTitleWrapper>
      <Content>
        <ContentWrapper>
          <Paragraph>
          Write messages to your students (Optional) that will be sent automatically when they join or complete your course to encourage students to engage with course content. If you do not wish to send a welcome or congratulations message, leave the text box blank.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Title>Welcome Message</Title>
          <ContentForm>
            <textarea rows={10} cols={30}  style={{resize: "none"}}></textarea>
          </ContentForm>
        </ContentWrapper>
        <ContentWrapper>
          <Title>Congratulations Message</Title>
          <ContentForm>
            <textarea rows={10} cols={30} style={{resize: "none"}}></textarea>
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

export default CourseMessagesContent;
