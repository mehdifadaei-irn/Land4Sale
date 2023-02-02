import React from "react";
import { FLS } from "formsazy/dist/formsazy";

function Simple() {
  return (
    <div className="w-full h-screen">
      <div class="row">
        <div class="col-12">
          <div class="card">
            {" "}
            <div id="tableDiv">
              <div class="card-header col-12 col-md-12 col-lg-12">
                <div id="create" class="col-1"></div>
                <div class="col-1">
                  {" "}
                  <h4>فهرست </h4>
                </div>
                <div class="col-6"></div>
                <div id="search" class="col-4 input-group"></div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table id="table" class="table table-striped">
                    <thead id="thead"></thead>
                    <tbody id="tbody"></tbody>
                  </table>
                  <div id="pager"></div>
                </div>
              </div>
            </div>{" "}
            <div
              id="formDiv"
              class="section-body card-body col-12 col-md-6 col-lg-6"
            >
              <form>
                <div id="fields-panel" class="form-group"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simple;
