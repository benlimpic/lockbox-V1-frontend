import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import BootstrapTable from "react-bootstrap-table-next";
import { useNavigate } from "react-router-dom";

const Projects = (props) => {
  const navigate = useNavigate();

  //! CREATE CARDS FOR EACH PROJECT !//

  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:3000/api/v1/projects`)
      .then((result) => setData(result.data));
  };

  useEffect(() => {
    setSearchData(
      data.filter((project) => {
        return search.toLowerCase() === ""
          ? project
          : project.siteName.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase() === ""
          ? project
          : project.siteCity.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase() === ""
          ? project
          : project.siteState.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase() === ""
          ? project
          : project.updated_at.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, data]);

  const updater = (searchData, row) => {
    return <>{row.updated_at.slice(0, 10)}</>;
  };

  const columns = [
    {
      dataField: "siteName",
      text: "Site",
      sort: true,
    },
    {
      dataField: "siteCity",
      text: "City",
      sort: true,
    },
    {
      dataField: "siteState",
      text: "State",
      sort: true,
    },
    {
      dataField: "updated_at",
      text: "Updated",
      sort: true,
      formatter: updater,
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      navigate(`/projects/${row.id}`);
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "15px",
        borderRadius: ".75rem",
      }}
    >
      <h3>Projects Listed:</h3>
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
          keyField="id"
          data={searchData}
          columns={columns}
          rowEvents={rowEvents}
          responsive
          condensed
          striped
          hover
        />
      </div>
    </div>
  );
};

export default Projects;
