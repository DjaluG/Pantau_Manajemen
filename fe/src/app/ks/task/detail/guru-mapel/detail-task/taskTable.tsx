"use client";
import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CardTable from "./cardTable";
import { MantineProvider } from "@mantine/core";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import Image from 'next/image';



const TaskTable = () => {
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([
    {
      id: 1, task: "Snow", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Jon", status: "Done", image: "Look"
    },
    {
      id: 2, task: "Lannister", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Cersei", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 3, task: "Lannister", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Jaime", status: "Done", image: "Look"
    },
    {
      id: 4, task: "Stark", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Arya", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 5, task: "Targaryen", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Daenerys", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 6, task: "Melisandre", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Putri", status: "Done", image: "Look"
    },
    {
      id: 7, task: "Clifford", program: "Mengelol a Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Ferrara", status: "Done", image: "Look"
    },
    {
      id: 8, task: "Frances", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Rossini", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 9, task: "Roxie", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Harvey", status: "Done", image: "Look"
    },
    {
      id: 10, task: "Snow", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Jon", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 11, task: "Lannister", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Cersei", status: "Done", image: "Look"
    },
    {
      id: 12, task: "Lannister", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Jaime", status: "Done", image: "Look"
    },
    {
      id: 13, task: "Stark", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Arya", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 14, task: "Targaryen", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Daenerys", status: "Done", image: "Look"
    },
    {
      id: 15, task: "Melisandre", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Putri", status: "Done", image: "Look"
    },
    {
      id: 16, task: "Clifford", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Ferrara", status: "Done", image: "Look"
    },
    {
      id: 17, task: "Frances", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Rossini", status: "On Progress", image: "Not uploaded yet"
    },
    {
      id: 18, task: "Roxie", program: "Mengelola Nilai", date: "2023-11-23",
      target: "2023-12-23", category: "Harvey", status: "Done", image: "Look"
    },
  ]);
  const [filteredRows, setFilteredRows] = useState(rows);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const editTask = () => {
    router.push("/guru/task/edit-task");
  };

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
    {
      field: "task", headerName: "Task", width: 380, renderCell: (params: any) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflow: "hidden",
          }}
        >
          <div>{params.row.task}</div>
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
      )
    },
    { field: "program", headerName: "Program", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "status", headerName: "Status", width: 150,
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
            color: params.row.image === "Look" ? "#3BFA3B" : "#E03131",
            width: "100px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            textDecoration: params.row.image !== "Not uploaded yet" ? "underline" : "none",
          }}
          onClick={() => {
            if (params.row.image !== "Not uploaded yet") {
              openModal();
            }
          }}
        >
          {params.row.image}
        </div>
      ),
    },

  ];

  return (
    <>
      <CardTable title="Juliana Mansur, M.Kom. Tasks">
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
            rowHeight={90}
          />
        </div>
      </CardTable>

      {isModalOpen && (
        <motion.div
          id="popup-modal"
          className="fixed inset-0 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            id="authentication-modal"
            className="fixed inset-0 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-sm z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Proof
                  </h3>
                  <motion.button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={closeModal}
                    whileHover={{ scale: 1.2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
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
                  </motion.button>
                </div>
                <div className="p-4 md:p-5">
                  <Image src={`/images/image_proof.jpg`} height={400} width={400} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TaskTable;