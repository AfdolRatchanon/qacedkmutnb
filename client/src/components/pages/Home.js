import React, { useState, useEffect } from "react";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import ChartDoughnutCompent from "./officer/Chart/ChartDoughnutComponent";
import TableComponent from "./tables/TableComponent";
import { loadAllQuestion } from "../functions/query";

const Home = () => {
  const [data, setData] = useState();

  const loadData = () => {
    loadAllQuestion()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // console.log(err.response.date);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>หน้าแรก</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item font-weight-bold">หน้าแรก</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Default box */}
              <div className="card">
                {/* <div className="card-header">
                 <h3 className="card-title">Title</h3>
                 <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                       <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                       <i className="fas fa-times" />
                    </button>
                 </div>
              </div> */}
                {/* <div className="card-body">
                           <h1>Home Page</h1>
                        </div> */}
                <div className="card-body">
                  <h1>คำถามทั้งหมด</h1>
                  <section className="content">
                    <div className="container-fluid">
                      <div className="row">
                      {data.map((value, key) => (
                        <div></div>
                      ))}
                        <div className="post">
                          <div className="user-block">
                            <img
                              className="img-circle img-bordered-sm"
                              src="../../dist/img/user1-128x128.jpg"
                              alt="user image"
                            />
                            <span className="username">
                              <a href="#">Jonathan Burke Jr.</a>
                            </span>
                            <span className="description">
                              Shared publicly - 7:45 PM today
                            </span>
                          </div>
                          {/* /.user-block */}
                          <p>
                            Lorem ipsum represents a long-held tradition for
                            designers, typographers and the like. Some people
                            hate it and argue for its demise, but others ignore.
                          </p>
                          <p>
                            <a href="#" className="link-black text-sm">
                              <i className="fas fa-link mr-1" /> Demo File 1 v2
                            </a>
                          </p>
                        </div>

                        <div className="col-xl-6">
                          <div className="card card-primary">
                            <div className="card-header">
                              <h3 className="card-title">{/* Bar Chart */}</h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                >
                                  <i className="fas fa-minus" />
                                </button>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="chart">
                                <TableComponent />
                              </div>
                            </div>
                          </div>

                          {/* /.card */}
                          {/* DONUT CHART */}

                          {/* /.card */}
                        </div>
                        {/* /.col (LEFT) */}
                        <div className="col-xl-6">
                          {/* BAR CHART */}
                          <div className="card card-success">
                            <div className="card-header">
                              <h3 className="card-title">
                                {/* Donut Chart */}
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                >
                                  <i className="fas fa-minus" />
                                </button>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="chart">
                                <ChartDoughnutCompent />
                              </div>
                            </div>
                            {/* /.card-body */}
                          </div>
                          {/* /.card */}
                        </div>
                        {/* /.col (RIGHT) */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                  </section>
                </div>
                {/* /.card-body */}
                {/* <div className="card-footer"></div> */}
                {/* /.card-footer*/}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
};

export default Home;
