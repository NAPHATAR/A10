'use client';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B82F6', 
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3B82F6',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3B82F6',
          },
        },
      },
    },
  },
});

export default function DateReserve() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: {
                fullWidth: true,
                variant: "outlined",
                className: "bg-white rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg",
                InputProps: {
                  className: "text-gray-700",
                },
                InputLabelProps: {
                  className: "text-gray-600",
                },
              },
            }}
          />
      </LocalizationProvider>
    </ThemeProvider>
  );
}