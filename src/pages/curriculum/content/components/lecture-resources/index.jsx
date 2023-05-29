/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { styled } from "styled-components";
import { Tabs } from "antd";

import UploadFile from "../upload-file";
import Library from "../library";
import ExternalResources from "../external-resources";

const items = [
  {
    key: "1",
    label: `Downloadable file`,
    children: (
      <UploadFile
        paragraph="Note: A resource is for any type of document that can be used to help students in the lecture. This file is going to be seen as a lecture extra. Make sure everything is legible and the file size is less than 1 GiB.
    "
      />
    ),
  },
  {
    key: "2",
    label: `Add from library`,
    children: <Library />,
  },
  {
    key: "3",
    label: `External Resources`,
    children: <ExternalResources />,
  },
];

const LectureResources = ({ setShowResources }) => {
  return (
    <LectureResourcesWrapper>
      <ResourcesTag>
        Add Resources
        <AiOutlineClose
          onClick={() => setShowResources(false)}
          className="icon"
        />
      </ResourcesTag>
      <TabsWrapper>
        <Tabs defaultActiveKey="1" items={items} size="large" />
      </TabsWrapper>
    </LectureResourcesWrapper>
  );
};

const TabsWrapper = styled.div`
  position: relative;
  margin: 0 1rem;
  .ant-tabs {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
    width: 100%;
  }
`;

const ResourcesTag = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: -2.25rem;
  padding: 0.25rem 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  gap: 1rem;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-bottom: 0;
  .icon {
    cursor: pointer;
  }
`;

const LectureResourcesWrapper = styled.div`
  position: relative;
  margin: 1rem;
  margin-top: 0;
  height: fit-content;
  border: 1px solid black;
  border-top: 0;
  .article {
    margin-top: 0;
    padding-top: 1rem;
  }
`;

export default LectureResources;
