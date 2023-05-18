/* eslint-disable react/prop-types */
import styled from "styled-components";

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 20px;
  cursor: pointer;

  div {
    width: 100%;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease-in-out;
  }

  div:nth-child(1) {
    transform: ${({ open }) =>
      open ? "rotate(45deg) translate(4px, 4px)" : "none"};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  div:nth-child(3) {
    transform: ${({ open }) =>
      open ? "rotate(-45deg) translate(4px, -4px)" : "none"};
  }
`;

const Hamburger = ({ open, onClick }) => (
  <HamburgerIcon open={open} onClick={onClick}>
    <div />
    <div />
    <div />
  </HamburgerIcon>
);

<<<<<<< HEAD
export default Hamburger;
=======
export default Hamburger;
>>>>>>> fe53668 (Update UI course messages)
