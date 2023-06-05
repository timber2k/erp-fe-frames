/* eslint-disable react/prop-types */
import { Tag } from "antd";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const THead = styled.thead`
  background-color: lightgray;
  font-weight: bold;
`;

const TH = styled.th`
  padding: 10px;
  border: 1px solid black;
  font-size: 1rem;
`;

const TD = styled.td`
  padding: 1rem;
`;

const TBody = styled.tbody`
  padding: 10px;
`;

const CheckBox = styled.input`
  width: 100%;
  height: 2rem;
  cursor: pointer;
  &:checked {
    background-color: black;
  }
`;

const TR = styled.tr`
  .instructor {
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    .tag {
      width: fit-content;
    }
  }
`;

const TableData = ({ instructor }) => {
  return (
    <TR>
      <TD className="instructor">
        <span>{instructor}</span>
        <Tag className="tag" color="#ABABAB">
          Owner
        </Tag>
      </TD>
      <TD>
        <CheckBox type="checkbox" name="visible" />
      </TD>
      <TD>
        <CheckBox type="checkbox" name="manage" />
      </TD>
      <TD>
        <CheckBox type="checkbox" name="caption" />
      </TD>
      <TD>
        <CheckBox type="checkbox" name="qAndA" />
      </TD>
      <TD>
        <CheckBox type="checkbox" name="assignment" />
      </TD>
    </TR>
  );
};

const TableWithCheckboxes = () => {
  return (
    <div>
      <Table>
        <THead>
          <TH>Instructor</TH>
          <TH>Visible</TH>
          <TH>Manage</TH>
          <TH>Caption</TH>
          <TH>Q&A</TH>
          <TH>Assignment</TH>
        </THead>
        <TBody>
          <TableData instructor="Trainer1" />
        </TBody>
      </Table>
    </div>
  );
};

export default TableWithCheckboxes;
