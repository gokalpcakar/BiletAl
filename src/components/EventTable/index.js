import React, { useEffect, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getEvents, deleteEventsById } from "../../network/requests/EventServices";
import { Box, Container, Stack, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
    editable: true,
  },
];



function EventTable() {
  const { isLoading, data } = useQuery("events", getEvents);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  useEffect(()=>{
    if(!isLoading && data) {
      setRows(data);
    }
  }, [data]);

  const handleDelete = () => {
    if (data.length == 0) {
      return;
    }
    selectedRows.map((row) => {
      var index = Number(row.id);
      setRows([...rows.slice(0, index-1), ...rows.slice(index)])//Delete from DataGrid
      return deleteEventsById(index);//Delete from Server
    })
  }

  return (
    <>
      {isLoading ? (<div>Loading...</div>) : rows ? (
        <Box sx={{ height: 400, width: "100%", marginTop: "7rem", marginBottom: "7rem" }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={1}>
              <Button size="small">
                <EditRoundedIcon />
              </Button>
              <Button size="small" onClick={handleDelete}>
                <DeleteSweepRoundedIcon />
              </Button>
              <Button size="small">
                <AddCircleRoundedIcon />
              </Button>
            </Stack>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
              disableRowSelectionOnClick
              onRowSelectionModelChange={(ids) => {
                const selectedRows = ids.map((id) => {
                  return data?.find((row) =>
                    row.id == id
                  );
                });
                setSelectedRows(selectedRows);
              }}
            />
          </Container>
        </Box>
      ) : (<div>No data available.</div>)}
    </>
  )
}

export default EventTable;