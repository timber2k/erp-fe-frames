import styled from "styled-components";
import { Typography } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import TableWithCheckboxes from "./table";

const CourseSettingsContent = () => (
  <>
    <PageTitleWrapper>
      <PageTitle level={2}>Settings</PageTitle>
    </PageTitleWrapper>
    <Content>
      <StatusWrapper>
        <Title>Course Status</Title>
        <Paragraph>
          Course Status This course is not published on the Udemy marketplace.
        </Paragraph>
        <StatusContent>
          <ButtonWrapper>
            <Button>Unpublish</Button>
            <Paragraph>
              New students cannot find your course via search, but existing
              students can still access content.
            </Paragraph>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>Delete</Button>
            <Paragraph>
              We promise students lifetime access, so courses cannot be deleted
              after students have enrolled.
            </Paragraph>
          </ButtonWrapper>
        </StatusContent>
      </StatusWrapper>
      <EnrollmentWrapper>
        <Title>Enrollment (Privacy)</Title>
        <EnrollmentGroup>
          <Select>
            <option>Public</option>
            <option>Private (Invitation only)</option>
          </Select>
          <SaveButton>Save</SaveButton>
        </EnrollmentGroup>
        <Paragraph>
          If a course&#39;s enrollment page is invitation only, the course
          won&#39;t show up in search results on Udemy. Accept new student
          requests and send invitations from the &#34;Students&#34; page found
          under &#34;Course Management&#34; in the left navigation.
        </Paragraph>
      </EnrollmentWrapper>
      <InstructorWrapper>
        <InstructorHeading>
          <Title>Manage instructor permissions</Title>
          <AddInstructor>
            <AiOutlinePlus className="icon" />
            <span>Add Instructor</span>
          </AddInstructor>
        </InstructorHeading>
        <TableWithCheckboxes />
        <SaveButton className="manage-save">Save</SaveButton>
      </InstructorWrapper>
    </Content>
  </>
);

const AddInstructor = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #5624d0;
  & > span {
    font-weight: 600;
    font-size: 1.25rem;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const InstructorHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstructorWrapper = styled.div`
  min-height: 10rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .manage-save {
    width: fit-content;
    margin-top: 2rem;
  }
`;

const SaveButton = styled.button`
  background: black;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
`;

const Select = styled.select`
  padding: 0.25rem 1rem;
  background: white;
  border: 1px solid black;
  cursor: pointer;
  font-weight: 700;
`;

const EnrollmentGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EnrollmentWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  height: fit-content;
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.25rem 1rem;
  background: white;
  min-width: 8rem;
  border: 1px solid black;
  cursor: pointer;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Title = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

const StatusWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  height: fit-content;
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const Content = styled.div`
  width: 100%;
  min-height: fit-content;
`;

export default CourseSettingsContent;
