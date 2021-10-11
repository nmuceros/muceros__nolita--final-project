import React, { useState } from "react";
import { Container } from "reactstrap";
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter
  // useAsyncDebounce,
} from "react-table";

import { Table } from "reactstrap";
import {
  Label,
  Input,
  CustomInput,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { matchSorter } from "match-sorter";
import classNames from "classnames";
import "../../css/table.css"

// import sortasc from "./assets/sort_asc.png";ƒ
// import sortdesc from "./assets/sort_desc.png";
// import sortboth from "./assets/sort_both.png";
// import ç from "./assets/loader-table.gif";

import { FaSortUp }  from "react-icons/fa"
import { FaSortDown } from "react-icons/fa"
import { FaSort } from "react-icons/fa"
import { BiLoaderCircle } from "react-icons/bi"




function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  return (
    <Input
      type="text"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder="Search..."
      style={{
        fontSize: "10px"
      }}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

fuzzyTextFilterFn.autoRemove = (val) => !val;



const ListingTable = ({ columns, data, loading = true, key }) => {
  const [switchSearch, setSwitchSearch] = useState(false);
  const toggleSwitchSearch = () => {
    setAllFilters([]);
    setSwitchSearch(!switchSearch);
  };
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      defaultColumn,
      filterTypes
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Container>
      <div key={key}>
        <span className="float-right ">
          <CustomInput
            checked={switchSearch}
            className="table-search-switch"
            type="switch"
            name="customSwitch"
            id="customSwitch"
            onClick={toggleSwitchSearch}
            label="Filter Data"
          />
        </span>
      </div>
      <Table {...getTableProps()} hover bordered responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <>
              <tr className="theader" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span className="float-right">
                      {!column.notShowSortingDisplay ? (
                        column.isSorted ? (
                          column.isSortedDesc ? (
                            // <img src={FaSortDown} alt="descending" />
                            <div>
                              <FaSortDown 
                                  style={{
                                      fontSize: "1.5rem"
                                  }}                                                        
                                />
                            </div>                            
                          ) : (
                            // <img src={FaSortUp} alt="ascending" />
                            <div>
                              <FaSortUp 
                                  style={{
                                      fontSize: "1.5rem"
                                  }}                                                        
                                />
                            </div>
                          )
                        ) : (
                          // <img src={FaSort} alt="sorting" /> 
                          <div>
                              <FaSort 
                                  style={{
                                      fontSize: "1.5rem"
                                  }}                                                        
                              />
                           </div>                          
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
              {switchSearch ? (
                <tr style={{ backgroundColor: "aliceBlue" }}>
                  {headerGroup.headers.map((column, index) => (
                    <th className="tfilter">
                      {column.canFilter ? (
                        <FormGroup className="mb-1">
                          <Label className="divFilter mb-0">
                            Filter {column.render("Header")} :
                          </Label>
                          {column.render("Filter")}
                        </FormGroup>
                      ) : null}
                    </th>
                  ))}
                </tr>
              ) : (
                ""
              )}
            </>
          ))}
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan="10000" className="text-center">
                <img src={BiLoaderCircle} alt="Loading..." />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {page.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="10000" className="text-left">
                    * No record found
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps({
                              className: cell.column.className
                            })}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </>
        )}
      </Table>

      {page.length > 0 && (
        <div className={classNames("div-pagination", { "d-none": loading })}>
          <div className="div-pagination-2">
            <div className="div-pagination-2-2">
              Showing{" "}
              <select
                className="selectan"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{" "}
              record per-page
            </div>
          </div>

          <div className="div-pagination-1">
            Page : {pageIndex + 1} from {pageOptions.length}{" "}
            <Pagination className="pagina">
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => gotoPage(0)}>
                  {"<<"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => previousPage()}>
                  {"<"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => nextPage()}>
                  {">"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => gotoPage(pageCount - 1)}>
                  {">>"}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="div-pagination-2-1">
              Next to Page {" : "}
              <input
                className="inputan"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
            </div>{" "}
          </div>
        </div>
      )}
  </Container>
  );
};

export default ListingTable;