import { Button, Space, Tag } from "antd";
import styled, { keyframes } from "styled-components";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useEffect, useState } from "react";

import Hamburger from "./hamburger";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <StyledSidebar>
        <TabletSidebar>
          <Hamburger open={open} onClick={() => setOpen(!open)} />
          <SubmitButton className="tablet-button">
            Submit For Review
          </SubmitButton>
        </TabletSidebar>
        <SidebarWrapper display={open ? "flex" : "none"}>
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
                <span>Curriculum</span>
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
      </StyledSidebar>
    </>
  );
};

const StyledSidebar = styled.div`
  background: transparent;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    height: 100%;
    min-width: 400px;
    margin: 0;
  }
`;

const TabletSidebar = styled.div`
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tablet-button {
    width: 200px;
    height: 70%;
    margin: 0.25rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const appearAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const SidebarWrapper = styled.div`
  display: ${(props) => props.display};
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-height: 180px;
  background: transparent;
  justify-content: space-between;
  gap: 1rem;
  .submit-button {
    display: none;
  }
  animation: ${appearAnimation} 0.5s ease-in;
  @media (min-width: 992px) {
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    .submit-button {
      border: 0;
      display: block;
    }
    .overview-element {
      height: 30%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 100%;
  }
`;

const SidebarElement = styled.div`
  width: 100%;
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
  @media (min-width: 992px) {
    height: 20%;
  }
  @media (max-width: 768px) {
    min-height: 180px;
  }
`;

const SidebarElementContent = styled.div`
  margin: 0.75rem;
  width: auto;
  height: auto;
  display: flex;
  border-radius: 0.25rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 992px) {
    gap: 1.25rem;
    margin: 1rem;
  }
`;

const NavigateElement = styled.div`
  display: flex;
  align-items: center;
  .nav-icon {
    margin-right: 0.5rem;
    font-size: 2rem;
    line-height: 1;
  }
  span {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
  }
  @media (min-width: 992px) {
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
