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
  height: fit-content;
  padding: 0 1rem;
  padding-top: 5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column-reverse;
  border: 2px solid black;
  @media (min-width: 992px) {
    flex-direction: row;
    height: 100%;
  }
`;

const ContentLayout = styled(Layout)`
  width: auto;
  background: white;
  border: 2px solid black;
  border-radius: 0.25rem;
  min-height: fit-content;
  @media (min-width: 992px) {
    margin-right: 1rem;
  }
`;

export default IntendedLearners;