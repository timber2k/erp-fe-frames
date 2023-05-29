import { Tabs } from "antd";
import { styled } from "styled-components";

import UploadFile from "../upload-file";
import Library from "../library";

const items = [
  {
    key: "1",
    label: `Upload Video`,
    children: (
      <UploadFile paragraph="Note: All files should be at least 720p and less than 4.0 GB." />
    ),
  },
  {
    key: "2",
    label: `Add from library`,
    children: <Library />,
  },
];

const VideoContentType = () => (
  <TabsWrapper>
    <Tabs defaultActiveKey="1" items={items} size="large" />
  </TabsWrapper>
);

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

export default VideoContentType;
