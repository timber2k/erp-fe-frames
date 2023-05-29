import { styled } from "styled-components";

const ExternalResources = () => (
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

export default ExternalResources;
