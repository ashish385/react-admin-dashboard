import { Box } from "@mui/material";
import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";






type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <div className="view" >
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
          </div>
          <div className="delete" onClick={()=> handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };


  const handleDelete = (id:number) => {
    console.log(id + "has been deleted");
    
  }
  return (
    <div>
      <Box sx={{ height: 700, width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns,actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnSelector
          disableDensitySelector
          disableColumnFilter
        />
      </Box>
    </div>
  );
};

export default DataTable;
