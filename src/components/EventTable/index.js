import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";
import { getEvents, deleteEventsById } from "../../network/requests/EventServices";
import { Box, Container, Stack, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
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
    field: 'startDate',
    headerName: 'Start Date',
    width: 150,
    editable: true,
  },
  {
    field: 'endDate',
    headerName: 'End Date',
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
  let { status, data } = useQuery("events", getEvents);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [rows, setRows] = useState(data);

  const handleDelete = () => {
    if (data && selectedRowIds ) {
      selectedRowIds.map(id => deleteEventsById(id) ) 
    }
  }

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Box sx={{ height: 400, width: "100%", marginTop: "7rem", marginBottom: "7rem" }}>
          <Container maxWidth="lg" sx={{backgroundColor:"#ffe7ba"}}>
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
              rows={rows ? rows : setRows(data)}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              checkboxSelection
              disableRowSelectionOnClick
              onRowSelectionModelChange={(selectedIds) => {
                setSelectedRowIds(selectedIds)
              }}
            />
          </Container>
        </Box>
      )}
    </>
  )
}

export default EventTable;