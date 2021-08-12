import React from "react";

import { useTable, usePagination, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import mydata from "./mydata/github_recdata.json";
import styled from "styled-components";
import { useExportData } from "react-table-plugins";
import Papa from "papaparse";


const Styles = styled.div`

  .page-link {
    color: black;

  }

  .right {
    text-align: right;
    }
    
    

`


function getExportFileBlob({ columns, data, fileType, fileName }) {
    if (fileType === "csv") {
        // CSV example
        const headerNames = columns.map((col) => col.exportValue);
        const csvString = Papa.unparse({ fields: headerNames, data });
        return new Blob([csvString], { type: "text/csv" });
    }
    // Other formats goes here
    return false;
}



function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        exportData,
    } = useTable(
        {
            columns,
            data,
            getExportFileBlob,
            initialState: {
                pageIndex: 0,
                pageSize: 10,
                sortBy: [
                    {
                        id: 'date',
                        desc: true
                    }
                ]
            },
        },
        useSortBy,

        usePagination,
        useExportData,

    )
    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <ul className="pagination">
                {/* <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li> */}
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                {/* <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li> */}
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                {/* <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '} */}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button onClick={() => { exportData("csv", true); }}>
                    {/* <button onClick={() => {exportData("csv", true);}}> */}
                    Export CSV
                </button>
            </ul>
        </div >
    )
}



function toCurrency(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString('KRW');
}
function PaginationTableComponent() {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: '거래량(REC)',
                accessor: 'trade_volume',
                Cell: props => <div> {toCurrency(props.value)} </div>

                // Cell: row => <div style={{ textAlign: "center" }}>{toCurrency(row.value)}</div>

                // Cell: props => toCurrency(props.value),

                //  Cell: data => data.value.toLocaleString(),
            },
            {
                Header: '종가(원)',
                accessor: 'closing_price',
                Cell: props => <div> {toCurrency(props.value)} </div>

                //   Cell: row => <div style={{ textAlign: "center" }}>{toCurrency(row.value)}</div>,
                //   className: "right",
                // width: 250,  
            },


        ],
        []
    )


    const data = React.useMemo(
        () => mydata,
        [mydata]
    )


    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default PaginationTableComponent;


