import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, af) {
  return { name, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, af };
}
const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    fontSize: '1.5em',
  },
  //   tablecell: {
  //   },
});

const rows = [
  createData(
    'Pujan Talukder',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick'
  ),
  createData(
    'Mriganka Ghosh',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick'
  ),
  createData(
    'Praveen Reddy',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick'
  ),
  createData(
    'Nikita Kaushik',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick'
  ),
  createData(
    'Gurshan Singh',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick',
    'tick'
  ),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="Table">
      <TableHead>
        <TableRow>
          <TableCell>Employee Name</TableCell>
          <TableCell align="right">1</TableCell>
          <TableCell align="right">2</TableCell>
          <TableCell align="right">3</TableCell>
          <TableCell align="right">4</TableCell>
          <TableCell align="right">5</TableCell>
          <TableCell align="right">6</TableCell>
          <TableCell align="right">7</TableCell>
          <TableCell align="right">8</TableCell>
          <TableCell align="right">9</TableCell>
          <TableCell align="right">10</TableCell>
          <TableCell align="right">11</TableCell>
          <TableCell align="right">12</TableCell>
          <TableCell align="right">13</TableCell>
          <TableCell align="right">14</TableCell>
          <TableCell align="right">15</TableCell>
          <TableCell align="right">16</TableCell>
          <TableCell align="right">17</TableCell>
          <TableCell align="right">18</TableCell>
          <TableCell align="right">19</TableCell>
          <TableCell align="right">20</TableCell>
          <TableCell align="right">21</TableCell>
          <TableCell align="right">22</TableCell>
          <TableCell align="right">23</TableCell>
          <TableCell align="right">24</TableCell>
          <TableCell align="right">25</TableCell>
          <TableCell align="right">26</TableCell>
          <TableCell align="right">27</TableCell>
          <TableCell align="right">28</TableCell>
          <TableCell align="right">29</TableCell>
          <TableCell align="right">30</TableCell>
          {/* <TableCell align="right">31</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.a}</TableCell>
            <TableCell align="right">{row.b}</TableCell>
            <TableCell align="right">{row.c}</TableCell>
            <TableCell align="right">{row.d}</TableCell>
            <TableCell align="right">{row.e}</TableCell>
            <TableCell align="right">{row.f}</TableCell>
            <TableCell align="right">{row.g}</TableCell>
            <TableCell align="right">{row.h}</TableCell>
            <TableCell align="right">{row.i}</TableCell>
            <TableCell align="right">{row.j}</TableCell>
            <TableCell align="right">{row.k}</TableCell>
            <TableCell align="right">{row.l}</TableCell>
            <TableCell align="right">{row.m}</TableCell>
            <TableCell align="right">{row.n}</TableCell>
            <TableCell align="right">{row.o}</TableCell>
            <TableCell align="right">{row.p}</TableCell>
            <TableCell align="right">{row.q}</TableCell>
            <TableCell align="right">{row.r}</TableCell>
            <TableCell align="right">{row.s}</TableCell>
            <TableCell align="right">{row.t}</TableCell>
            <TableCell align="right">{row.u}</TableCell>
            <TableCell align="right">{row.v}</TableCell>
            <TableCell align="right">{row.w}</TableCell>
            <TableCell align="right">{row.x}</TableCell>
            <TableCell align="right">{row.y}</TableCell>
            <TableCell align="right">{row.z}</TableCell>
            <TableCell align="right">{row.aa}</TableCell>
            <TableCell align="right">{row.ab}</TableCell>
            <TableCell align="right">{row.ac}</TableCell>
            <TableCell align="right">{row.ad}</TableCell>
            <TableCell align="right">{row.ae}</TableCell>
            {/* <TableCell align="right">"last"</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
