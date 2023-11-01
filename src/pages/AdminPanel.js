import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useQuery } from "react-query";
import { getEvents } from "../network/requests/EventServices";
import { Container, Grid } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function AdminPanel() {
  const { data } = useQuery("events", getEvents);

  return (
    <Container maxWidth="lg" sx={{marginTop:"7%", marginBottom:"4%"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">İsim</StyledTableCell>
              <StyledTableCell align="left">Şehir</StyledTableCell>
              <StyledTableCell align="left">Mekan</StyledTableCell>
              <StyledTableCell align="left">Etkinlik Türü</StyledTableCell>
              <StyledTableCell align="left">Başlangıç Tarihi</StyledTableCell>
              <StyledTableCell align="left">Bitiş Tarihi</StyledTableCell>
              <StyledTableCell align="left">Ücret&nbsp;(TL)</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row"><strong>{row.id}</strong></StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.city}</StyledTableCell>
                <StyledTableCell align="left">{row.location}</StyledTableCell>
                <StyledTableCell align="left">{row.eventType}</StyledTableCell>
                <StyledTableCell align="left">{row.startDate}</StyledTableCell>
                <StyledTableCell align="left">{row.endDate}</StyledTableCell>
                <StyledTableCell align="left">{row.price}</StyledTableCell>
                <StyledTableCell align="left"><ClearIcon /></StyledTableCell>
                <StyledTableCell align="left"><EditIcon /></StyledTableCell>
                <StyledTableCell align="left"><AddIcon /></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default AdminPanel