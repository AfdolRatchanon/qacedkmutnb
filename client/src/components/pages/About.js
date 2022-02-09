import React from "react";

const About = () => {
   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>เกี่ยวกับระบบ</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item font-weight-bold">เกี่ยวกับระบบ</li>
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
                        <div className="card-body">
                           <h1>Home Page</h1>
                           <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           </p>
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

export default About;
