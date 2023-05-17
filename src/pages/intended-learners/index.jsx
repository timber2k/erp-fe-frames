import { Layout } from "antd";
import styled from "styled-components";

import TopBar from "../../components/top-bar";
import IntendedContent from "./content";
import Sidebar from "../../components/sidebar";

const IntendedLearners = () => (
  <ScreenLayout>
    <TopBar />
    <WrapperLayout>
      <ContentLayout>
        <IntendedContent />
      </ContentLayout>
      <Sidebar />
    </WrapperLayout>
  </ScreenLayout>
);

const ScreenLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
`;

const WrapperLayout = styled(Layout)`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-top: 5rem;
  padding-bottom: 1rem;
  display: flex;
  border: 2px solid black;
`;

const ContentLayout = styled(Layout)`
  width: auto;
  margin-right: 1rem;
  background: white;
  border: 2px solid black;
  border-radius: 0.25rem;
`;

export default IntendedLearners;
