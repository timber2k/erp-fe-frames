import { useState } from "react";
import styled from "styled-components";
import { Layout, Typography, Tabs, Table, Input, Button, Space } from "antd";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillCheckCircle,
  AiOutlinePlus,
  AiOutlineCaretDown,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const { Search } = Input;

const editorConfig = {
  ckfinder: {
    options: {
      height: "8rem",
    },
  },
};

const Tab1Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <InputWrapper>
        <FileName className="file-selected">
          {selectedFile ? selectedFile.name : "No File Selected"}
        </FileName>
        <FileInput type="file" id="file" onChange={handleFileChange} />
        <SelectButton htmlFor="file">Select File</SelectButton>
      </InputWrapper>
      <Note>
        Note: A resource is for any type of document that can be used to help
        students in the lecture. This file is going to be seen as a lecture
        extra. Make sure everything is legible and the file size is less than 1
        GiB.
      </Note>
    </>
  );
};

const Note = styled.p`
  margin-top: 1rem;
  width: 100%;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  background-color: #d9d9d9;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border: 1px solid black;
  .file-selected {
    font-weight: 500;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const SelectButton = styled.label`
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-left: 1px solid black;
`;

const FileName = styled.div`
  margin-left: 10px;
`;

const data = [];

const columns = [
  {
    title: "File Name",
    dataIndex: "fileName",
    key: "fileName",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

const Tab2Content = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = data.filter((item) =>
    item.fileName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <SearchWrapper>
        <Space>
          <Search
            placeholder="Search Files By Name"
            allowClear
            className="search"
            enterButton={
              <Button
                style={{ background: "black", color: "white" }}
                icon={<AiOutlineSearch />}
              />
            }
            onSearch={handleSearch}
          />
        </Space>
      </SearchWrapper>
      <TableWrapper>
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          locale={{
            emptyText: "No Results Found.",
          }}
        />
      </TableWrapper>
    </>
  );
};

const TableWrapper = styled.div`
  .ant-table-thead {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  border: 1px solid black;
  margin-bottom: 1rem;
`;

const SearchWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  .ant-btn {
    border-radius: 0px;
    border-start-end-radius: 0px;
    border-end-end-radius: 0px;
  }
`;

const Tab3Content = () => (
  <>
    <ExternalResourcesWrapper>
      <Input3Wrapper>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
      </Input3Wrapper>
      <Input3Wrapper>
        <label htmlFor="url">URL</label>
        <input id="url" type="text" />
      </Input3Wrapper>
      <LinkButton>Add Link</LinkButton>
    </ExternalResourcesWrapper>
  </>
);

const LinkButton = styled.div`
  background: black;
  padding: 0.25rem 1rem;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 1rem;
  width: fit-content;
  color: white;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

const Input3Wrapper = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  & > label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  & > input {
    border: 1px solid black;
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const ExternalResourcesWrapper = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 0.5rem;
`;

const items = [
  {
    key: "1",
    label: `Downloadable file`,
    children: <Tab1Content />,
  },
  {
    key: "2",
    label: `Add from library`,
    children: <Tab2Content />,
  },
  {
    key: "3",
    label: `External Resources`,
    children: <Tab3Content />,
  },
];

const CurriculumContent = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <>
      <PageTitleWrapper>
        <PageTitle level={2}>Curriculum</PageTitle>
      </PageTitleWrapper>
      <Content>
        <div>
          <Paragraph>
            Start putting together your course by creating sections, lectures
            and practice activities (quizzes, coding exercises and assignments).
            Use your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </Paragraph>
        </div>
        <div>
          <Section>
            <SectionHeading>
              <span>Section 1: Introduction</span>
              <AiFillEdit className="icon" />
              <AiFillDelete className="icon" />
            </SectionHeading>
            <Lecture>
              <LectureHeading>
                <LectureTitle>
                  <AiFillCheckCircle className="icon" />
                  <span>Lecture 1: Introduction</span>
                  <AiFillEdit className="icon" />
                  <AiFillDelete className="icon" />
                </LectureTitle>
                {!showResources && (
                  <ContentButton>
                    <NewButton>
                      <AiOutlinePlus className="icon" />
                      Content
                    </NewButton>
                    <AiOutlineCaretDown />
                  </ContentButton>
                )}
              </LectureHeading>
              <LectureContent>
                {!showDescription && !showResources && (
                  <ButtonGroup>
                    <NewButton onClick={() => setShowDescription(true)}>
                      <AiOutlinePlus className="icon" />
                      Description
                    </NewButton>
                    <NewButton onClick={() => setShowResources(true)}>
                      <AiOutlinePlus className="icon" />
                      Resources
                    </NewButton>
                  </ButtonGroup>
                )}
                {showDescription && (
                  <LectureDescription>
                    <DescriptionHeading>Lecture Description</DescriptionHeading>
                    <EditorWrapper>
                      <CKEditor
                        config={editorConfig}
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                      />
                    </EditorWrapper>
                    <DescriptionButtons>
                      <DescriptionButton
                        onClick={() => setShowDescription(false)}
                      >
                        Cancel
                      </DescriptionButton>
                      <DescriptionButton
                        onClick={() => setShowDescription(false)}
                        className="save"
                      >
                        Save
                      </DescriptionButton>
                    </DescriptionButtons>
                  </LectureDescription>
                )}
                {showResources && (
                  <LectureResources>
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
                  </LectureResources>
                )}
              </LectureContent>
            </Lecture>
            <NewButton className="add-curriculum">
              <AiOutlinePlus className="icon" />
              Curriculum Item
            </NewButton>
          </Section>
        </div>
      </Content>
    </>
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

const LectureResources = styled.div`
  position: relative;
  margin: 1rem;
  margin-top: 0;
  height: fit-content;
  border: 1px solid black;
  border-top: 0;
`;

const DescriptionButton = styled.div`
  border: 1px solid black;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const DescriptionButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  .save {
    background: black;
    color: white;
  }
`;

const EditorWrapper = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  min-height: 5rem;
  .ck-editor__editable {
    min-height: 5rem;
  }
`;

const DescriptionHeading = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

const LectureDescription = styled.div`
  margin: 1rem;
  height: calc(100% - 2rem);
`;

const SectionHeading = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const Lecture = styled.div`
  border: 1px solid black;
  margin: 1rem;
  margin-top: 0;
  height: calc(100% - 5rem);
`;

const LectureTitle = styled.div`
  height: 100%;
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
  display: flex;
  align-items: center;
  gap: 1rem;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const LectureContent = styled.div`
  // height: calc(100% - 4rem);
  height: fit-content;
`;

const ButtonGroup = styled.div`
  margin: 1rem;
  height: 5rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewButton = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  padding: 0.25rem 0.25rem 0.25rem 0;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const ContentButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  .button {
    border: 1px solid black;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
`;

const LectureHeading = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
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

const Content = styled(Layout.Content)`
  width: 100%;
  padding: 1rem;
  min-height: fit-content;
  .add-curriculum {
    width: fit-content;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  & > div {
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    padding: 0 2rem;
    padding-bottom: 1.5rem;
    & > div {
      margin-bottom: 0.75rem;
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 1600px) {
    padding: 0 3rem;
    padding-bottom: 2.5rem;
    & > div {
      margin-bottom: 1.5rem;
      margin-top: 1rem;
    }
  }
`;

const Paragraph = styled(Typography.Paragraph)`
  margin-top: 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
  @media (min-width: 1368px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Section = styled.div`
  border: 1px solid black;
  width: 100%;
  height: fit-content;
`;

export default CurriculumContent;
