import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from '../../data'
import "./users.scss"
import { useState } from "react";
import Add from "../../components/add/Add";



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    type: "string",
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
    type: "string",
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];




const Users = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpenModal(true)}>Add new me</button>
      </div>
      <div className="tabelData">
        
          <DataTable slug="user" rows={userRows} columns={columns} />


        {openModal && (
          <Add slug="user" columns={columns} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default Users