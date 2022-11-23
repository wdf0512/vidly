import React from 'react'
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({columns, sortColumn, onSort, data}) => {
    return (
      <table class="table">
        <TableHeader
          columns={columns}
          sortColum={sortColumn}
          onSort={onSort}
        />
        <TableBody data={data} columns={columns} />
      </table>
    );
}
 
export default Table;