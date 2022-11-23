import React, { Component } from "react";

// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColum = { ...this.props.sortColum };
    if (sortColum.path === path) {
      sortColum.order = sortColum.order === "asc" ? "desc" : "asc";
    } else {
      sortColum.path = path;
      sortColum.order = "asc";
    }

    this.props.onSort(sortColum);
  };

  renderSortIcon = (column) => {
    const { sortColum } = this.props;

    if (column.path !== this.props.sortColum.path) return null;
    if (sortColum.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
