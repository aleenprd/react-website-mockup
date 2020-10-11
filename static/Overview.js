import React from 'react';
import { Component } from 'react';

export default class Overview extends Component {
	render() {
		return (
			<div id="firstDashboard" class="container-fluid my-5 py-5">
		        {/* Section: Block Content */}
		        <section>

		          {/* GRID ROW */}
		          <div class="row">

		            {/* GRID COLUMN 1 */}
		            <div class="col-md-6 col-lg-3 mb-4 animate__animated animate__pulse">
		              <div class="shadow-sm p-0 mb-5 bg-white rounded">
		                {/* CARD */}
		                <div class="card primary-color white-text ">
		                  <div class="card-body d-flex justify-content-between align-items-center">
		                    <div>
		                      <p class="adminHeader h2-responsive font-weight-bold mt-n2 mb-0">18.600 DKK</p>
		                      <p class="mb-0">Total Earnings (DKK)</p>
		                    </div>
		                    <div>
		                      <i class="fas fa-shopping-bag fa-4x text-black-40"></i>
		                    </div>
		                  </div>
		                  <a class="moreInfo card-footer footer-hover small text-center white-text border-0 p-2">More info<i class="fas fa-arrow-circle-right pl-2"></i></a>
		                </div>
		                {/* CARD */}
		              </div>
		            </div>
		            {/* GRID COLUMN 1 */}

		            {/* GRID COLUMN 2 */}
		            <div class="col-md-6 col-lg-3 mb-4 animate__animated animate__pulse">
		              {/* CARD */}
		              <div class="card warning-color white-text shadow-sm p-0 mb-5 bg-white rounded">
		                <div class="card-body d-flex justify-content-between align-items-center">
		                  <div>
		                    <p class="adminHeader h2-responsive font-weight-bold mt-n2 mb-0">18</p>
		                    <p class="mb-0">Total Completed Sessions</p>
		                  </div>
		                  <div>
		                    <i class="fas fa-chart-bar fa-4x text-black-40"></i>
		                  </div>
		                </div>
		                <a class="moreInfo card-footer footer-hover small text-center white-text border-0 p-2">More info<i class="fas fa-arrow-circle-right pl-2"></i></a>
		              </div>
		              {/* CARD */}
		            </div>
		            {/* GRID COLUMN 2 */}

		            {/* GRID COLUMN 3 */}
		            <div class="col-md-6 col-lg-3 mb-4 animate__animated animate__pulse">
		              {/* CARD */}
		              <div class="card light-blue lighten-1 white-text shadow-sm p-0 mb-5 bg-white rounded">
		                <div class="card-body d-flex justify-content-between align-items-center">
		                  <div>
		                    <p class="adminHeader h2-responsive font-weight-bold mt-n2 mb-0">1.066 DKK</p>
		                    <p class="mb-0">Average Fee/Hour (DKK)</p>
		                  </div>
		                  <div>
		                    <i class="fas fa-user-plus fa-4x text-black-40"></i>
		                  </div>
		                </div>
		                <a class="moreInfo card-footer footer-hover small text-center white-text border-0 p-2">More info<i class="fas fa-arrow-circle-right pl-2"></i></a>
		              </div>
		              {/* CARD */}
		            </div>
		            {/* GRID COLUMN 3 */}

		            {/* GRID COLUMN 4 */}
		            <div class="col-md-6 col-lg-3 mb-4 animate__animated animate__pulse">
		              {/* CARD */}
		              <div class="card red accent-2 white-text shadow-sm p-0 mb-5 bg-white rounded">
		                <div class="card-body d-flex justify-content-between align-items-center">
		                  <div>
		                    <p class="adminHeader h2-responsive font-weight-bold mt-n2 mb-0">1</p>
		                    <p class="mb-0">Number of Cancellations</p>
		                  </div>
		                  <div>
		                    <i class="fas fa-chart-pie fa-4x text-black-40"></i>
		                  </div>
		                </div>
		                <a class="moreInfo card-footer footer-hover small text-center white-text border-0 p-2">More info<i class="fas fa-arrow-circle-right pl-2"></i></a>
		              </div>
		              {/* CARD */}
		            </div>
		            {/* GRID COLUMN 4 */}
		          </div>
		          {/* GRID ROW */}

		        </section>
		        {/* Section: Block Content */}
      		</div>
		)
	}
}