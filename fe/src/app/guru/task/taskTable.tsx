"use client";
import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CardTable from "./cardTable";
import { MantineProvider } from "@mantine/core";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";

const TaskTable = () => {
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([
    { id: 1, task: "Snow", program: "Mengelola Nilai", category: "Jon", status: "Done", image: "Done" },
    { id: 2, task: "Lannister", program: "Mengelola Nilai", category: "Cersei", status: "On Progress", image: "Upload" },
    { id: 3, task: "Lannister", program: "Mengelola Nilai", category: "Jaime", status: "Done", image: "Done" },
    { id: 4, task: "Stark", program: "Mengelola Nilai", category: "Arya", status: "On Progress", image: "Upload" },
    { id: 5, task: "Targaryen", program: "Mengelola Nilai", category: "Daenerys", status: "On Progress", image: "Upload" },
    { id: 6, task: "Melisandre", program: "Mengelola Nilai", category: "Putri", status: "Done", image: "Done" },
    { id: 7, task: "Clifford", program: "Mengelola Nilai", category: "Ferrara", status: "Done", image: "Done" },
    { id: 8, task: "Frances", program: "Mengelola Nilai", category: "Rossini", status: "On Progress", image: "Upload" },
    { id: 9, task: "Roxie", program: "Mengelola Nilai", category: "Harvey", status: "Done", image: "Done" },
    { id: 10, task: "Snow", program: "Mengelola Nilai", category: "Jon", status: "On Progress", image: "Upload" },
    { id: 11, task: "Lannister", program: "Mengelola Nilai", category: "Cersei", status: "Done", image: "Done" },
    { id: 12, task: "Lannister", program: "Mengelola Nilai", category: "Jaime", status: "Done", image: "Done" },
    { id: 13, task: "Stark", program: "Mengelola Nilai", category: "Arya", status: "On Progress", image: "Upload" },
    { id: 14, task: "Targaryen", program: "Mengelola Nilai", category: "Daenerys", status: "Done", image: "Done" },
    { id: 15, task: "Melisandre", program: "Mengelola Nilai", category: "Putri", status: "Done", image: "Done" },
    { id: 16, task: "Clifford", program: "Mengelola Nilai", category: "Ferrara", status: "Done", image: "Done" },
    { id: 17, task: "Frances", program: "Mengelola Nilai", category: "Rossini", status: "On Progress", image: "Upload" },
    { id: 18, task: "Roxie", program: "Mengelola Nilai", category: "Harvey", status: "Done", image: "Done" },
  ]);
  const [filteredRows, setFilteredRows] = useState(rows);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const columns: GridColDef[] = [
    { field: "id", headerName: "No", width: 50 },
    { field: "task", headerName: "Task", width: 200 },
    { field: "program", headerName: "Program", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
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
      field: "image",
      headerName: "Image Proof",
      width: 150,
      renderCell: (params: any) => (
        <div
          style={{
            color: params.row.image === "Done" ? "#3BFA3B" : "#0B409C",
            width: "100px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            textDecoration: params.row.image !== "Done" ? "underline" : "none",
          }}
          onClick={() => {
            if (params.row.image !== "Done") {
              openModal();
            }
          }}
        >
          {params.row.image}
        </div>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
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
              <EditIcon style={{fontSize: "20px"}} />
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
              <DeleteIcon style={{fontSize: "20px"}} />
            </IconButton>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <CardTable title="My Task">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
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
          />
        </div>
      </CardTable>

      <div
        id="popup-modal"
        tabIndex="-1"
        className={`${isModalOpen
          ? "fixed inset-0 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-sm"
          : "hidden"
          } z-50`}
      >
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className={`${isModalOpen
            ? "fixed inset-0 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-sm"
            : "hidden"
            } z-50`}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Upload Image Proof
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ backgroundColor: "#001E42" }}
                  >
                    Submit
                  </button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskTable;
