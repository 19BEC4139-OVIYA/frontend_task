import { React } from "react";
import { Table } from "antd";

const SimpleTable = ({ dataSource }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <div className="table-container">
      {dataSource.length ? (
        <>
          <Table style={{width:"50%"}} dataSource={dataSource} columns={columns} />

        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
