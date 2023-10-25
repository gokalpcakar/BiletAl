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
    navigate('/filtered-results');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          value={selectedDateRange}
          onChange={handleDateRangeChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}