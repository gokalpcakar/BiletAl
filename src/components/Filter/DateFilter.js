import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { getEvents } from "../../network/requests/EventServices";
import { useQuery } from "react-query";

export default function SingleInputDateRangePicker() {
  const [selectedDateRange, setSelectedDateRange] = React.useState([null, null]);
  const { setSearchResults } = useSearchContext();
  const { data } = useQuery("events", getEvents);
  const navigate = useNavigate();


  const handleDateRangeChange = (newDateRange) => {
    setSelectedDateRange(newDateRange);
  
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.startDate);
      const [startDate, endDate] = newDateRange;
      
      return (
        ( itemDate >= startDate) && itemDate <= endDate)
      
    });
  
    setSearchResults(filteredData);
    navigate('/');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}
        sx={{
            overflow: 'hidden',
            '& .MuiInputBase-root': {
              height: '50px',
              width: '100%',
              borderRadius: '10px',
              border: 'none',
              alignItems: 'center',
            },
        }}
      >
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          format="DD-MM-YYYY"
          sx={{
            borderRadius: "10px",
            '&:hover': {
                backgroundColor: "#EFEFEF",
            }
          }}
          slotProps={{
            day: { 
              sx:{
                "&.MuiPickersDay-root.Mui-selected": {
                    color: "white",
                    backgroundColor: "#2ed87b",
                    borderRadius: "20px",
                    ":hover": {
                    color: "white",
                    backgroundColor: "#2ed87b",
                    borderColor: "#2ed87b"
                    }
                },
                ":hover": {
                    color: "white",
                    backgroundColor: "#2ed87b",
                    borderRadius: "20px",
                    borderColor: "#2ed87b"
                }
            }}}}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}