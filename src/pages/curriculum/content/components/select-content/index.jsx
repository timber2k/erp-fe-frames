/* eslint-disable react/prop-types */
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { styled } from "styled-components";

const SelectContentType = ({ setShowVideoType, setShowArticleType }) => (
  <SelectContent>
    <Description>
      Select the main type of content. Files and links can be added as
      resources.
    </Description>
    <SelectIcons>
      <IconWrapper onClick={() => setShowVideoType(true)}>
        <AiOutlineVideoCameraAdd className="icon" />
        <span>Video</span>
      </IconWrapper>
      <IconWrapper onClick={() => setShowArticleType(true)}>
        <BsBook className="icon" />
        <span>Article</span>
      </IconWrapper>
    </SelectIcons>
  </SelectContent>
);

const SelectContent = styled.div`
  margin: 0 1rem;
  min-height: fit-content;
  position: relative;
  padding-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const SelectIcons = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
  .icon {
    width: 3rem;
    height: 3rem;
  }
`;

export default SelectContentType;
