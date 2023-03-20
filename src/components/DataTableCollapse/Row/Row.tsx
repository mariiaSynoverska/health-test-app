import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IRow<T> {
  row: T;
}

export const Row = <T extends { attendance: any[] }>({ row }: IRow<T>) => {
  const [open, setOpen] = useState(false);

  const { attendance, ...data } = row;

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ padding: "10px", width: 20 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {Object.values(data).map((value) =>
          <TableCell sx={{ padding: "10px", maxWidth: 200, wordBreak: "break-all" }}>{typeof value === "string" ? value : JSON.stringify(value)}</TableCell>
        )}
      </TableRow >
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {attendance?.length ?
              <Box sx={{ margin: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom component="div">
                  Attendance
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow sx={{ borderTop: '1px solid #e0e0e0' }}>
                      {Object.keys(row.attendance[0]).map(key => <TableCell key={key} sx={{ fontWeight: 600 }}>{key}</TableCell>)}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.attendance.map((row: any) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        {Object.values(row).map((value) => <TableCell>{typeof value === "string" ? value : JSON.stringify(value)}</TableCell>)}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box> :
              <Typography variant="h6" gutterBottom component="div">
                no Attendance
              </Typography>}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}