import { Button, Space, Input, Table } from "antd";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styled } from "styled-components";

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

const Library = () => {
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
          <Input.Search
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

export default Library;
