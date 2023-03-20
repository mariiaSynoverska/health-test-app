import { useMemo } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Row } from './Row';

interface IDataTable<T> {
  executedHeaders?: string[];
  rows: Array<T>
}

export const DataTableCollapse = <T extends { id: number, attendance: any[] }>({ executedHeaders, rows }: IDataTable<T>) => {
  const headers = useMemo(() => {
    return Object.keys(rows[0]).filter(key => !executedHeaders?.includes(key));
  }, [executedHeaders, rows]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {headers.map(header => <TableCell key={header} sx={{ fontWeight: 600 }}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}