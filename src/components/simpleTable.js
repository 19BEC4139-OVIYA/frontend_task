import { Button, Modal, Table } from "antd";

import { React , useState } from "react";

const SimpleTable = ({ dataSource,deleteUser }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentUser,setCurrentUser] = useState(null)

  const deleteUserHandler = (user) =>{
    console.log("deleteUserHandler",user)
    deleteUser(user)
    setIsDeleteModalOpen(false)
  }

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
    {
      title: 'Actions',
      dataIndex: '',
      key: 'x',
      render: (text, record) => (
  <div style={{display:"flex"}}>
    

  

  <Button className="table-button" onClick={() => {
    setCurrentUser(record);
    setIsDeleteModalOpen(true)
  }} type="primary" danger>
    Delete
  </Button>
  </div>
      ),
    },
  ];

  return (
    <div className="table-container">
      <Modal title="Delete User" open={isDeleteModalOpen} onOk={() => deleteUserHandler(currentUser)} onCancel={() => setIsDeleteModalOpen(false)}>
		<p>Are you sure you want to delete this user?</p>
		<p>(This action cannot be undone)</p>
	      </Modal>

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
