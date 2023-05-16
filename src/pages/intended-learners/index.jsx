import { Layout } from "antd";
import styled from "styled-components";
import Sider from "antd/es/layout/Sider";

import TopBar from "../../components/top-bar";
import IntendedContent from "./content";

const IntendedLearners = () => (
  <ScreenLayout>
    <TopBar />
    <WrapperLayout>
      <ContentLayout>
        <IntendedContent />
      </ContentLayout>
      <SideBar width={300} style={{ background: "transparent" }}></SideBar>
    </WrapperLayout>
  </ScreenLayout>
);

const ScreenLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
  border: 1px solid black;
`;

const WrapperLayout = styled(Layout)`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-top: 5rem;
  padding-bottom: 1rem;
  display: flex;
  border: 1px solid black;
`;

const ContentLayout = styled(Layout)`
  width: auto;
  margin-right: 1rem;
  background: white;
  border: 1px solid black;
`;

const SideBar = styled(Sider)`
  background: white;
  border: 1px solid black;
  margin: 0;
`;

export default IntendedLearners;
