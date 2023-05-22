import styled from "styled-components";
import { Layout, Typography, Input, Select, Upload, Button } from "antd";
import { AiOutlineUpload } from "react-icons/ai";

import { uploadImage } from "../../../assets";

const CourseLandingContent = () => (
  <>
    <PageTitleWrapper>
      <PageTitle level={2}>Course Landing Page</PageTitle>
    </PageTitleWrapper>
    <Content>
      <ContentElement className="first-child content-element">
        <label htmlFor="title">Course Title</label>
        <Input
          id="title"
          className="input"
          placeholder="Enter your course title"
        />
      </ContentElement>
      <ContentElement>
        <label htmlFor="subtitle">Course Subtitle</label>
        <Input
          id="subtitle"
          className="input"
          placeholder="Enter your course subtitle"
        />
      </ContentElement>
      <ContentElement className="content-element">
        <label htmlFor="description">Course Description</label>
        <Input.TextArea
          rows={4}
          id="description"
          className="input"
          style={{ resize: "none" }}
          placeholder="Enter your course description"
        />
      </ContentElement>
      <ContentElement className="content-element">
        <label className="basic-info">Basic Info</label>
        <SelectWrapper>
          <div className="select-col">
            <Select
              defaultValue="Languages"
              options={[
                { value: "Vietnamese", label: "Vietnamese" },
                { value: "English", label: "English" },
                { value: "Japanese", label: "Japanese" },
              ]}
            />
            <Select
              defaultValue="Level"
              options={[
                { value: "Vietnamese", label: "Vietnamese" },
                { value: "English", label: "English" },
                { value: "Japanese", label: "Japanese" },
              ]}
            />
          </div>
          <div className="select-col">
            <Select
              defaultValue="Category"
              style={{ width: "100%" }}
              options={[
                { value: "Vietnamese", label: "Vietnamese" },
                { value: "English", label: "English" },
                { value: "Japanese", label: "Japanese" },
              ]}
            />
            <Select
              defaultValue="Sub-Category"
              style={{ width: "100%" }}
              options={[
                { value: "Vietnamese", label: "Vietnamese" },
                { value: "English", label: "English" },
                { value: "Japanese", label: "Japanese" },
              ]}
            />
          </div>
        </SelectWrapper>
      </ContentElement>
      <ContentElement className="content-element">
        <label style={{ display: "block" }}>Course Image</label>
        <CourseImageWrapper>
          <img src={uploadImage} alt="upload course image" />
          <div>
            <div className="upload-description">
              Upload your course image here. It must meet our course image
              quality standards to be accepted. Important guidelines: 750x422
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </div>
            <div className="upload">
              <Upload className="upload-list-inline" listType="text">
                <Button icon={<AiOutlineUpload />}>Click to Upload</Button>
              </Upload>
            </div>
          </div>
        </CourseImageWrapper>
      </ContentElement>
      <ContentElement className="content-element">
        <label style={{ display: "block" }}>Promotional Video</label>
        <CourseImageWrapper>
          <img src={uploadImage} alt="upload course image" />
          <div>
            <div className="upload-description">
              Your promo video is a quick and compelling way for students to
              preview what they’ll learn in your course. Students considering
              your course are more likely to enroll if your promo video is
              well-made. Learn how to make your promo video awesome!
            </div>
            <div className="upload">
              <Upload className="upload-list-inline" listType="text">
                <Button icon={<AiOutlineUpload />}>Click to Upload</Button>
              </Upload>
            </div>
          </div>
        </CourseImageWrapper>
      </ContentElement>
    </Content>
  </>
);

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
  .first-child {
    margin-top: 1rem;
  }
  .content-element {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 992px) {
    padding: 0 2rem;
    padding-bottom: 1.5rem;
  }
  @media (min-width: 1600px) {
    padding: 0 3rem;
    padding-bottom: 2.5rem;
  }
`;

const ContentElement = styled.div`
  label {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .input {
    margin-top: 0.25rem;
  }
  .basic-info {
    display: block;
  }
`;

const SelectWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  max-height: 100px;
  gap: 1rem;
  .select-col {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-width: 200px;
    gap: 1rem;
  }
  @media (min-width: 992px) {
    .select-col {
      min-width: 350px;
    }
  }
  @media (min-width: 1368px) {
    .select-col {
      min-width: 450px;
    }
  }
  @media (max-width: 480px) {
    .select-col {
      min-width: 40%;
    }
  }
`;

const CourseImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    object-fit: cover;
    width: 6rem;
    height: 6rem;
  }
  .upload-description {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .upload-list-inline {
    display: flex;
    gap: 0.5rem;
  }
  .ant-upload-list {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0px;
    height: fit-content;
  }
  .ant-upload-list-item-container {
    margin: 0;
  }
`;

export default CourseLandingContent;
