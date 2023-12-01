import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";
import { getEvents, deleteEventsById, addNewEvent } from "../../network/requests/EventServices";
import { Box, Container, Stack, Button, TextField, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    width: 40
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 100,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 170,
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
    field: 'eventType',
    headerName: 'Event Type',
    width: 100,
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
  let { status, data } = useQuery("events", getEvents)
  const [selectedRowIds, setSelectedRowIds] = useState([])
  const [rows, setRows] = useState(data)
  const [show, setShow] = useState(false)

  const initialEvent = {
    id: "",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    city: "",
    images: [],
    eventType: "",
    price: ""
  }

  const [event, setEvent] = useState(initialEvent)

  const nameHandleChange = (e) => {
    setEvent({ ...event, name: e.target.value })
  }
  const descriptionHandleChange = (e) => {
    setEvent({ ...event, description: e.target.value })
  }
  const cityHandleChange = (e) => {
    setEvent({ ...event, city: e.target.value })
  }
  const locationHandleChange = (e) => {
    setEvent({ ...event, location: e.target.value })
  }
  const eventTypeHandleChange = (e) => {
    setEvent({ ...event, eventType: e.target.value })
  }
  const priceHandleChange = (e) => {
    setEvent({ ...event, price: e.target.value })
  }
  const startDateHandleChange = (e) => {
    setEvent({ ...event, startDate: e.target.value })
  }
  const endDateHandleChange = (e) => {
    setEvent({ ...event, endDate: e.target.value })
  }
  const imageHandleChange = (e) => {
    setEvent({ ...event, images: [...event.images, e.target.value] })
  }

  const handleDelete = () => {
    if (rows && selectedRowIds) {
      selectedRowIds.map(id => deleteEventsById(id))
      var newarr = rows.filter(row => !selectedRowIds.find(id => id == row.id))
      setRows(newarr)
    }
  }

  const handleAdd = () => {
    var maxId = Number(Math.max(...rows.map(row => row.id)))
    ++maxId
    //setEvent({ ...event, id: maxId }) --> Çalışmıyor
    if (event.name && event.city && event.location && event.startDate && event.endDate && event.price) {
      addNewEvent(event)
      setRows([...rows, event])
      setShow(!show)
      setEvent(initialEvent)
    } else {
      alert("You need to fill all inputs...")
    }
  }

  const handleUpdate = () => {

  }

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Box sx={{ pt: 15, pb: 7, width: "100%" }}>
          <Stack direction="row" spacing={1} sx={{ mx: 10 }}>
            <Button size="small" onClick={handleUpdate} style={{ backgroundColor: "#fff" }}>
              <EditRoundedIcon />
            </Button>
            <Button size="small" onClick={handleDelete} style={{ backgroundColor: "#fff" }}>
              <DeleteSweepRoundedIcon />
            </Button>
            <Button size="small" onClick={() => setShow(!show)} style={{ backgroundColor: "#fff" }}>
              <AddCircleRoundedIcon />
            </Button>
          </Stack >

          {show && (
            <Grid container
              columns={{ xs: 5, lg: 13}}
              columnSpacing={{ xs: 1, sm: 5}}
              rowSpacing={1}
              direction="row"
              justifyContent="center"
              sx={{ minWidth: "100%", my: 5, mx: 10 }}
            >
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={event.name}
                  onChange={nameHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  value={event.description}
                  onChange={descriptionHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  value={event.city}
                  onChange={cityHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Event Type"
                  variant="outlined"
                  value={event.eventType}
                  onChange={eventTypeHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  value={event.location}
                  onChange={locationHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Images"
                  variant="outlined"
                  value={event.images}
                  onChange={imageHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  value={event.price}
                  onChange={priceHandleChange}
                  sx={{ backgroundColor: "#fff", minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <input
                  type="date"
                  id="sDate"
                  value={event.startDate}
                  onChange={startDateHandleChange}
                  style={{ minWidth: "100%", minHeight: "50px" }}
                />
              </Grid>
              <Grid item xs={2} lg={4}>
                <input
                  type="date"
                  id="eDate"
                  value={event.endDate}
                  onChange={endDateHandleChange}
                  style={{ minWidth: "100%", minHeight: "50px" }}
                />
              </Grid>

              <Grid item xs={2} lg={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={handleAdd}
                  sx={{ minHeight: "100%", minWidth: "100%" }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          )}

          <DataGrid
            sx={{ backgroundColor: "#fff", mx: 10 }}
            rows={rows ? rows : setRows(data)}
            columns={columns}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={(selectedIds) => {
              setSelectedRowIds(selectedIds)
            }}
          />
        </Box >
      )}
    </>
  )
}

export default EventTable;