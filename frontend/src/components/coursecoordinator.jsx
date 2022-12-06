import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/cc.css";
var xlsx = require("xlsx");
const readUploadFile = (e) => {
  e.preventDefault();
  if (e.target.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const convertedjson = xlsx.utils.sheet_to_json(worksheet);
      console.log(convertedjson);
      console.log("Converted from XLSX to JSON");
      return convertedjson;
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  }
};

function Coursecoordinator() {
  const navigate = useNavigate();
  function handleSubmit() {
    console.log("sending to db");
  }
  var logo1 = require("../images/kletech1.png");
  var kle_cen = require("../images/klecen.png");

  return (
    <div className="classcc">
      <div id="cc">
        <>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n        body{\n          background-color:white;;\n        } \n #wrapper{ height: 100px; width: 100px;}      h1{\n          background-color: rgb(82, 139, 139);;\n          color:black;\n        }\n        h3{background-color: white;}\n        ",
            }}
          />
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img
                  src={logo1}
                  alt="Scholarship"
                  class="img-fluid mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <b>
                  <h4 class="text-center1">
                    Department of Under Graduate Committee
                  </h4>
                </b>
                <h6 class="text-center2">
                  School of Computer Science and Engineering
                </h6>
                <b>
                  <h7 class="text-center3">(For Academic Year 2022-23)</h7>
                </b>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12 col-md-12 row">
                <img
                  src={kle_cen}
                  alt=""
                  class="img-fluid mx-auto d-block float-xl-right float-lg-right float-md-right logoright"
                />
              </div>
            </div>
          </div>

          {/* <hr />
  <h3>Name : CC</h3>
  <h4>Course Name : <input type="text"  id="coursename" /></h4>
  <h4>Course Code : <input type="text"  id="coursecode" /></h4>
  <h4>Division : <input type="text"  id="division" /></h4>
  <h4>Year : <input type="text"  id="year" /></h4>

   */}
          <input
            class="btn btn-primary btn-sm"
            id="logoutbtn"
            type="submit"
            value="Logout"
            onClick={() => {
              navigate("/");
              alert("Successfully Logged Out from Course Coordinator");
            }}
          />
          <h3>Enter the Marks Spreadsheet here : </h3>
          <br />

          <form>
            <input
              type="file"
              name="upload"
              id="upload"
              onChange={readUploadFile}
            />
          </form>
          <br />
          {/* <input type="submit" onClick={submit} /> */}
          {/* test 1 */}
          <div>
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Course Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Course Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="pwd">
                  Course Code:
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter Course Code"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="pwd">
                  Year
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter Year"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="pwd">
                  Division
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter Division"
                  />
                </div>
              </div>
            </form>

            <form class="form-group row" onSubmit={handleSubmit}>
              <input type="submit" defaultValue="Add to DB" />
            </form>
          </div>

          <br />
          <br />
        </>
      </div>
    </div>
  );
}

export default Coursecoordinator;
