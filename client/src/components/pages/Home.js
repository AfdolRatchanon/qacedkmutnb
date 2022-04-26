import React, { useState, useEffect } from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import ChartDoughnutCompent from './officer/Chart/ChartDoughnutComponent'
import TableComponent from './tables/TableComponent'
// import { officerCountQuestionTypeAll } from "../functions/officer";

const Home = () => {
  // const [data, setData] = useState();

  // const loadData = () => {
  //    officerCountQuestionTypeAll()
  //       .then((res) => {
  //          // console.log(res.data);
  //          setData(res.data);
  //       })
  //       .catch((err) => {
  //          console.log(err);
  //          console.log(err.response);
  //          // console.log(err.response.date);
  //       });
  // };
  // useEffect(() => {
  //    loadData();
  // }, []);
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
  )
}

export default Home
