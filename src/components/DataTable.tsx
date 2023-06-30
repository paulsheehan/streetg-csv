import { PersonItems } from '../services/housingDataService';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTable(props: { data: PersonItems }): JSX.Element {
  return (
    <Paper sx={{ maxWidth: 1200 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader sx={{ maxHeight: 440 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Initials</TableCell>
              <TableCell>Surname</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.firstname}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.intials}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.lastname}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DataTable;
