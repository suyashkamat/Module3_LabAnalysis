import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

var logo1 = require("../images/kletech1.png");
var kle_cen = require("../images/klecen.png");
function Index() {
  const navigate = useNavigate();

  return (
    <div>
      <>
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
        <section
          className="vh-100"
          style={{ backgroundColor: "rgb(82, 139, 139)" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Id
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      color="rgb(82, 139, 139)"
                      type="submit"
                      id="submit"
                      onClick={() => {
                        var username =
                          document.getElementById("typeEmailX-2").value;
                        var password =
                          document.getElementById("typePasswordX-2").value;
                        if (username === "DUGC" && password === "123") {
                          alert("DUGC Coordinator login successful.");
                          navigate("/labanalysis");
                          return false;
                        }
                        if (username === "CC" && password === "123") {
                          alert("Course Coordinator Login Successful");
                          navigate("/coursecoordinator");
                          return false;
                        } else {
                          alert("Enter correct Id and Password.");
                        }
                      }}
                    >
                      Login
                    </button>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Index;
