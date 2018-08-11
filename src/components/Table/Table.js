import _ from 'lodash';
import React from 'react';
import fp from 'lodash/fp';
import Table from '@material-ui/core/Table';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const styles = {

};

const mapTableHeaders = fp.map(header => (
  <TableCell className={header.className} key={header.title}>
    {header.title}
  </TableCell>
));

const mapTableCells = props => row => fp.map(header => {
  if (row[header.key]) {
    return (
      <TableCell key={_.get(row, `${row[header.key]}.id`)}>
        {row[header.key]}
      </TableCell>
    )
  }

  if (header.Component) {
    return (
      <TableCell key={header.key}>
        {header.Component}
      </TableCell>
    );
  }

  return null;
});

const TableComponent = props => {
  const { classes, headers, data } = props;

  return (
    <Table>
      <TableBody>
        <TableRow role="checkbox">
          {mapTableHeaders(headers)}
        </TableRow>
        {
          _.map(data, row => (
            <TableRow key={row.id}>
              {mapTableCells(props)(row)(headers)}
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(TableComponent);
