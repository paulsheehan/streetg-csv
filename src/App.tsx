import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import {
  getProccessedHouseingData,
  PersonItems,
} from './services/housingDataService';
import './App.css';
import DataTable from './components/DataTable';

function App() {
  const [peopleData, updatePeopleData] = useState<PersonItems>([]);
  const [peopleIsFetching, updatePeopleIsFetching] = useState<Boolean>(false);
  const [peopleError, updatePeopleError] = useState<Boolean>(false);

  const handleButtonClick = () => {
    updatePeopleIsFetching(true);

    getProccessedHouseingData().then((data) => {
      updatePeopleIsFetching(false);
      if (data.length > 1) {
        updatePeopleData(data);
        updatePeopleIsFetching(false);
      } else {
        updatePeopleError(true);
        updatePeopleIsFetching(false);
      }
    });
  };

  return (
    <main className="App">
      <section className="gutter">
        <h1>Housing Data</h1>
        <p> 
          Click 'Get Data' to parse the CSV (from API). The output will be
          displayed in a table below.
        </p>
        <Button
          variant="contained"
          onClick={() => handleButtonClick()}
          disabled={peopleData.length > 0 || peopleIsFetching === true || peopleError === true}
        >
          GET DATA
        </Button>
        <div className="data-table-container">
          {!peopleIsFetching && peopleData.length > 0 ? (
            <DataTable data-testid="datatable-component" data={peopleData} />
          ) : null}
          {!peopleIsFetching && peopleError ? (
            <Alert severity="error">There was an issue fetching data</Alert>
          ) : null}
          {peopleIsFetching ? (
            <div data-testid="spinner-container">
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default App;
