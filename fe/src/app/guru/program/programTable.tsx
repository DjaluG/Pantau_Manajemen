"use client";
import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CardTable from "./cardTable";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "No", width: 50 },
  {
    field: "program",
    headerName: "Program",
    width: 450,
    renderCell: (params: any) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          overflow: "hidden",
        }}
      >
        <div>{params.row.program}</div>
        <div
          style={{
            fontSize: "11px",
            color: "#0B409C",
            opacity: "50%",
            marginTop: "5px",
          }}
        >
          Date: {params.row.date}
        </div>
        <div style={{ fontSize: "11px", color: "#E03131", opacity: "50%" }}>
          Target: {params.row.target}
        </div>
      </div>
    ),
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (params: any) => (
      <div
        style={{
          background:
            params.row.status === "On Progress" ? "#FFEB38" : "#38FA3B",
          padding: "4px",
          borderRadius: "20px",
          width: "100px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex	",
        }}
      >
        {params.row.status}
      </div>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (params: any) => (
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#FFEB38",
            borderRadius: "10px 0px 0px 10px",
          }}
        >
          <IconButton
            style={{ color: "white" }}
          // onClick={() => handleEditClick(params.row.id)}
          >
            <EditIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
        <div
          style={{
            backgroundColor: "#E03131",
            borderRadius: "0px 10px 10px 0px",
            marginLeft: "3px",
          }}
        >
          <IconButton
            style={{ color: "white" }}
          // onClick={() => handleDeleteClick(params.row.id)}
          >
            <DeleteIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    program:
      "Snowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    category: "Jon",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 2,
    program: "Lannister",
    category: "Cersei",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 3,
    program: "Lannister",
    category: "Jaime",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 4,
    program: "Stark",
    category: "Arya",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 5,
    program: "Targaryen",
    category: "Daenerys",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 6,
    program: "Melisandre",
    category: "Putri",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 7,
    program: "Clifford",
    category: "Ferrara",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 8,
    program: "Frances",
    category: "Rossini",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 9,
    program: "Roxie",
    category: "Harvey",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 10,
    program: "Snow",
    category: "Jon",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 11,
    program: "Lannister",
    category: "Cersei",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 12,
    program: "Lannister",
    category: "Jaime",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 13,
    program: "Stark",
    category: "Arya",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 14,
    program: "Targaryen",
    category: "Daenerys",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 15,
    program: "Melisandre",
    category: "Putri",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 16,
    program: "Clifford",
    category: "Ferrara",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 17,
    program: "Frances",
    category: "Rossini",
    status: "On Progress",
    date: "2023-11-23",
    target: "2023-12-23",
  },
  {
    id: 18,
    program: "Roxie",
    category: "Harvey",
    status: "Done",
    date: "2023-11-23",
    target: "2023-12-23",
  },
];

const programTable = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = (event: any) => {
    const { value } = event.target;
    setSearchText(value);

    // Filter data berdasarkan nilai pencarian
    const filteredData = rows.filter((row) =>
      Object.values(row).some(
        (cellValue) =>
          cellValue &&
          cellValue.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredRows(filteredData);
  };

  return (
    <>
      <CardTable title="My Program">
        <div
          style={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            sx={{ flex: 1, marginRight: "8px" }}
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div style={{ height: 370, width: "100%" }}>
          <DataGrid
            rows={filteredRows} // Menggunakan data yang telah difilter
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25, 50, 100]}
            sx={{
              border: "none",
            }}
            rowHeight={90}
          />
        </div>
      </CardTable>
    </>
  );
};

export default programTable;
