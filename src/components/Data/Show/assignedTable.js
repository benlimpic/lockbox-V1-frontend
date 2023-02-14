import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "../../../App.css";


const AssignedTable = (props) => {
  const { usedKeys, handleOnClick, projectId, setAssignedKeyClick } = props;
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, [usedKeys]);

  const getData = () => {
    axios
      .get(`/api/v1/projects/${projectId}/keys`)
      .then((result) => setData(result.data));
  };

  useEffect(() => {
    setSearchData(
      data.filter((key) => {
        return search.toLowerCase() === ""
          ? key
          : key.reference.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase() === ""
          ? key
          : key.cut.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase() === ""
          ? key
          : key.status.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase() === ""
          ? key
          : key.updated_at.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, data]);

  const updater = (searchData, row) => {
    return <>{row.updated_at.slice(0, 10)}</>;
  };

  const columns = [
    {
      dataField: "reference",
      text: "Desi",
      sort: true,
    },
    {
      dataField: "cut",
      text: "Cut",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      dataField: "updated_at",
      text: "Updated",
      sort: true,
      formatter: updater,
    },
  ];

  const colorRows = (row, rowIndex) => {
    const style = {};
    if (row.status === "In Use") {
      style.backgroundColor = "#FFF3CC";
    } else if (row.status === "Reserved") {
      style.backgroundColor = "#CFE2FF";
    } else if (row.status === "Archived") {
      style.backgroundColor = "#F8D7DA";
    }
    return style;
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      handleOnClick(row);
      setAssignedKeyClick(row);
    },
  };

  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </InputGroup>
      </Form>
      <div>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={searchData}
          columns={columns}
          rowStyle={colorRows}
          rowEvents={rowEvents}
          pagination={paginationFactory()}
          responsive
          striped
          hover
        />
      </div>
    </>
  );
};

export default AssignedTable;
