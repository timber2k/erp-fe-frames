import { Button, Layout, Menu } from "antd";
import { AiOutlineArrowLeft, AiFillSetting } from "react-icons/ai";
import styled from "styled-components";

const TopBar = () => (
  <StyledLayoutHeader>
    <StyedMenu mode="horizontal" className="w-full font-semibold">
      <Menu.Item key="1" icon={<AiOutlineArrowLeft />}>
        Back to Courses
      </Menu.Item>
      <Menu.Item key="2">
        <CourseName>Course Name</CourseName>
      </Menu.Item>
      <Menu.Item key="3">
        <Status>Draft</Status>
      </Menu.Item>
      <Menu.Item key="4" style={{ marginLeft: "auto" }}>
        <SaveButton>SAVE</SaveButton>
      </Menu.Item>
      <Menu.Item key="5">
        <SettingIcon>
          <AiFillSetting />
        </SettingIcon>
      </Menu.Item>
    </StyedMenu>
  </StyledLayoutHeader>
);

const StyledLayoutHeader = styled(Layout.Header)`
  background: black;
  border: 1px solid black;
  border-top: 0px;
  position: relative;
  z-index: 10;
  padding: 0 1rem;
`;

const StyedMenu = styled(Menu)`
  background: transparent;
  color: white;
  border: 1px solid black;
  border-top: 0px;
  font-size: 1rem;
`;

const CourseName = styled.span`
  font-weight: bold;
`;

const Status = styled.span`
  padding: 0.25rem;
  margin: 0.25rem;
  color: black;
  font-weight: bold;
  background: #8e8c8c;
  border-radius: 0.2rem;
`;

const SaveButton = styled(Button)`
  padding: 0.25rem;
  margin: 0.25rem;
  font-weight: bold;
  background: #8e8c8c;
  border-radius: 0.2rem;
`;

const SettingIcon = styled.div`
  font-size: 2rem;
`;

export default TopBar;
