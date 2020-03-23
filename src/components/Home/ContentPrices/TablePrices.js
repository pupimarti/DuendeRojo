import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#D22222',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(tipo, precio, dos, tres) {
  return { tipo, precio, dos, tres };
}

const rows = [
  createData('Individual', '$3000', '$1750 c/c', '$1250 c/c'),
  createData('2 Hermanos', '$5000', '$2750 c/c', '$1950 c/c'),
  createData('3 Hermanos', '$7000', '$3750 c/c', '$2750 c/c'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div id="test">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Tipo</StyledTableCell>
                <StyledTableCell align="right">Precio</StyledTableCell>
                <StyledTableCell align="right">2 Cuotas</StyledTableCell>
                <StyledTableCell align="right">3 Cuotas</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.tipo}>
                  <StyledTableCell component="th" scope="row">
                    {row.tipo}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.precio}</StyledTableCell>
                  <StyledTableCell align="right">{row.dos}</StyledTableCell>
                  <StyledTableCell align="right">{row.tres}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
    </div>
  );
}