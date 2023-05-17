import { Button, Space, Tag } from "antd";
import styled from "styled-components";
import Sider from "antd/es/layout/Sider";

import { AiOutlineCheckSquare } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <StyledSider width={400} style={{ background: "transparent" }}>
        <SidebarWrapper>
          <SidebarElement className="overview-element">
            <Space className="tag">
              <Tag color="#A435F0">Overview</Tag>
            </Space>
            <SidebarElementContent>
              <NavigateElement>
                <AiOutlineCheckSquare className="nav-icon" />
                <span>Intended learners</span>
              </NavigateElement>
              <NavigateElement>
                <AiOutlineCheckSquare className="nav-icon" />
                <span>Course landing page</span>
              </NavigateElement>
              <NavigateElement>
                <AiOutlineCheckSquare className="nav-icon" />
                <span>Course messages</span>
              </NavigateElement>
            </SidebarElementContent>
          </SidebarElement>
          <SidebarElement>
            <Space className="tag">
              <Tag color="#A435F0">Create your content</Tag>
            </Space>
            <SidebarElementContent className="create-your-content">
              <NavigateElement>
                <AiOutlineCheckSquare className="nav-icon" />
                <span>Intended learners</span>
              </NavigateElement>
            </SidebarElementContent>
          </SidebarElement>
          <SidebarElement>
            <Space className="tag">
              <Tag color="#A435F0">Tips & Tutorial</Tag>
            </Space>
            <SidebarElementContent></SidebarElementContent>
          </SidebarElement>
          <SidebarElement className="submit-button">
            <SubmitButton>Submit For Review</SubmitButton>
          </SidebarElement>
        </SidebarWrapper>
      </StyledSider>
    </>
  );
};

const StyledSider = styled(Sider)`
  background: white;
  margin: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: smoke;
  justify-content: space-between;
  .overview-element {
    height: 30%;
  }
  .submit-button {
    border: 0;
  }
`;

const SidebarElement = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 0.25rem;
  border: 2px solid black;
  .tag {
    position: relative;
    top: 0.25rem;
    left: 0.25rem;
  }
  .create-your-content {
    justify-content: flex-start;
  }
`;

const SidebarElementContent = styled.div`
  margin: 1rem;
  width: auto;
  height: auto;
  display: flex;
  border-radius: 0.25rem;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
`;

const NavigateElement = styled.div`
  display: flex;
  align-items: center;
  .nav-icon {
    margin-right: 0.5rem;
    font-size: 3rem;
    line-height: 1;
  }
  span {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  line-height: 1;
  background: #a435f0;
  color: white;
`;

export default Sidebar;
