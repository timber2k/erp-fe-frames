import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import {
  AiFillBook,
  AiFillQuestionCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaWrench } from "react-icons/fa";

import { dashboardUploadImage } from "../../assets";
import Hamburger from "../../components/sidebar/hamburger";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

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
    <Layout>
      <TopBar>
        {open && (
          <DropListWrapper>
            <DropDownList>
              <DropDownItem>
                <IoIosNotificationsOutline className="icon" />
                <span>Notification</span>
              </DropDownItem>
              <DropDownItem>
                <BiUser className="icon" />
                <span>Profile</span>
              </DropDownItem>
              <DropDownItem>
                <AiFillBook className="icon " />
                <span>Dashboard</span>
              </DropDownItem>
              <DropDownItem>
                <FaWrench className="icon" />
                <span>Setting</span>
              </DropDownItem>
              <DropDownItem>
                <AiFillQuestionCircle className="icon" />
                <span>FAQ</span>
              </DropDownItem>
            </DropDownList>
          </DropListWrapper>
        )}
        <TopBarHamburger>
          <Hamburger open={open} onClick={() => setOpen(!open)} />
        </TopBarHamburger>
        <TopBarIconsWrapper>
          <IoIosNotificationsOutline className="icon" />
          <BiUser className="icon" />
        </TopBarIconsWrapper>
      </TopBar>
      <Sidebar>
        <SidebarItem className="selected">
          <AiFillBook className="icon " />
        </SidebarItem>
        <SidebarItem>
          <FaWrench className="icon" />
        </SidebarItem>
        <SidebarItem>
          <AiFillQuestionCircle className="icon" />
        </SidebarItem>
      </Sidebar>
      <Content>
        <Title>Courses</Title>
        <Heading>
          <SearchBoxWrapper>
            <SearchBox>
              <input type="text" placeholder="Search Your Courses" />
              <SearchButton>
                <AiOutlineSearch className="icon" />
              </SearchButton>
            </SearchBox>
            <Select>
              <option>Newest</option>
            </Select>
          </SearchBoxWrapper>
          <NewCourseButton>New Course</NewCourseButton>
        </Heading>
        <CourseList>
          <CourseWrapper>
            <CourseImage>
              <img src={dashboardUploadImage} />
            </CourseImage>
            <CourseInfo>
              <span className="name">Course1</span>
              <span className="status">DRAFT</span>
            </CourseInfo>
          </CourseWrapper>
          <CourseWrapper>
            <CourseImage>
              <img src={dashboardUploadImage} />
            </CourseImage>
            <CourseInfo>
              <span className="name">Course2</span>
              <span className="status">PUBLISH</span>
            </CourseInfo>
          </CourseWrapper>
          <CourseWrapper>
            <CourseImage>
              <img src={dashboardUploadImage} />
            </CourseImage>
            <CourseInfo>
              <span className="name">Course3</span>
              <span className="status">REVIEWING</span>
            </CourseInfo>
          </CourseWrapper>
        </CourseList>
      </Content>
    </Layout>
  );
};

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
  cursor: pointer;
  .icon {
    width: 1.75rem;
    height: 1.75rem;
  }
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const DropDownList = styled.div`
  background: white;
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: -1rem;
  top: 1.5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DropListWrapper = styled.div`
  position: relative;
`;

const TopBarHamburger = styled.div`
  display: block;
  * {
    color: white;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const TopBarIconsWrapper = styled.div`
  display: none;
  gap: 1.5rem;
  .icon {
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const CourseInfo = styled.div`
  background: #f9f9f9;
  width: calc(100% - 10rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  padding-left: 2rem;
  .name {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .status {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const CourseImage = styled.div`
  width: fit-content;
  display: flex;
  background: #c7c7c7;
  & > img {
    margin: 2rem;
    max-width: 6rem;
    object-fit: cover;
  }
`;

const CourseWrapper = styled.div`
  min-height: 8rem;
  width: 100%;
  display: flex;
`;

const CourseList = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1.15rem;
  border: 1px solid black;
  background: white;
`;

const NewCourseButton = styled.div`
  padding: 0.25rem 1rem;
  background: #a435f0;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  width: fit-content;
  cursor: pointer;
  color: white;
  border-radius: 0.15rem;
`;

const SearchButton = styled.div`
  background: black;
  padding: 0.25rem;
  .icon {
    color: white;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  width: fit-content;
  display: flex;
  & > input {
    min-width: 12rem;
    padding-left: 1rem;
  }
  @media (min-width: 768px) {
    & > input {
      min-width: 15rem;
    }
  }
  @media (min-width: 992px) {
    & > input {
      min-width: 20rem;
    }
  }
`;

const SearchBoxWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Heading = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
`;

const SidebarItem = styled.div`
  .selected {
    border-left: 2px solid #a435f0;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  padding: 0 3rem;
  padding-top: 4rem;
  @media (min-width: 768px) {
    width: calc(100% - 3rem);
    height: calc(100% - 3rem);
  }
`;

const TopBar = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 3rem;
  position: absolute;
  z-index: 4;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 0;
  background: black;
  padding-left: 1rem;
  @media (min-width: 768px) {
    padding-right: 2rem;
    padding-left: 0rem;
    background: white;
    justify-content: flex-end;
  }
`;

const Sidebar = styled.div`
  background: black;
  width: 3rem;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 4rem;
  display: none;
  .icon {
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
    color: white;
  }
  .selected {
    border-left: 2px solid #a435f0;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
  * {
    box-sizing: border-box;
  }
`;

export default Dashboard;
