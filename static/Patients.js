import React from 'react';
import { Component } from 'react'; 

export default class Patients extends Component {
	render() {
		return (
			<div class="container mt-5 d-flex justify-content-around">
			  {/* SECTION CONTENT */}
			  <section class="text-center dark-grey-text">
			    <h3 class="font-weight-bold mb-4 pb-2">Patient Overview</h3>

			    {/* SECTION DESCRIPTION */}
			    <p class="text-center w-responsive mx-auto mb-5">Use this section to understand more about each 
			      individual patient. Here you can see their general diagnostic, their latest review of your services, your next appointment's date and much more!
			    </p>
			    {/* SECTION DESCRIPTION */}

			    {/* GRID ROW */}
			    <div class="row d-flex justify-content-between ">

			      {/* GRID COLUMN */}
			      <div class="col-lg-4 col-md-12 mb-4 zoom">
			        {/* PATIENT CARD */}
			        <div class="card testimonial-card shadow p-0 mb-5 bg-white rounded">
			          {/* BACKGROUND COLOR */}
			          <div class="card-up info-color"></div>
			          {/* PATIENT PHOTO */}
			          <div class="avatar mx-auto white">
			            <br/>
			            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid"/>
			          </div>
			          <div class="card-body">
			            {/* PATIENT NAME */}
			            <h4 class="font-weight-bold mb-4">Patient  1</h4>
			            <hr/>
			            <p><strong>Diagnostic: </strong>Chronic Depression</p>
			            <p><strong>Condition: </strong>Recovered</p>
			            <p><strong>Next Meeting: </strong>N/A</p>
			            {/* PATIENT QUOTE */}
			            <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>"It felt like it had been ages since I was last able to smile like this. All thanks to Haelper! Dr. Pedersen has been awesome but I think it's time I moved on with my life."</p>
			            <br/>
			            <button type="button" class="btn btn-dark">Details</button>
			          </div>
			        </div>
			        {/* PATIENT CARD */}
			      </div>
			      {/* GRID COLUMN */}

			      {/* GRID COLUMN */}
			      <div class="col-lg-4 col-md-6 mb-4 zoom">
			        {/* PATIENT CARD */}
			        <div class="card testimonial-card shadow p-0 mb-5 bg-white rounded">
			          {/* BACKGROUND COLOR */}
			          <div class="card-up blue-gradient">
			          </div>
			          {/* PATIENT PHOTO */}
			          <div class="avatar mx-auto white">
			            <br/>
			            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid"/>
			          </div>
			          <div class="card-body">
			            {/* PATIENT NAME */}
			            <h4 class="font-weight-bold mb-4">Patient 2</h4>
			            <hr/>
			            <p><strong>Diagnostic: </strong>PTSD</p>
			            <p><strong>Condition: </strong>Relapsing</p>
			            <p><strong>Next Meeting: </strong>07 Oct</p>
			            {/* PATIENT QUOTE */}
			            <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>
			            "I feel like I'm riding a rollercoaster of emotions. One week I'm at the top of the world and the next I am in the abyss. Therapy helps but there is still so much to do..."</p>
			            <br/>
			            <button type="button" class="btn btn-dark">Details</button>
			          </div>
			        </div>
			        {/* PATIENT CARD */}
			      </div>
			      {/* GRID COLUMN */}

			      {/* GRID COLUMN */}
			      <div class="col-lg-4 col-md-6 mb-4 zoom">
			        {/* PATIENT CARD */}
			        <div class="card testimonial-card shadow p-0 mb-5 bg-white rounded">
			          {/* BACKGROUND COLOR */}
			          <div class="card-up indigo"></div>
			          {/* PATIENT PHOTO */}
			          <div class="avatar mx-auto white">
			            <br/>
			            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid"/>
			          </div>
			          <div class="card-body">
			            {/* PATIENT NAME */}
			            <h4 class="font-weight-bold mb-4">Patient 3</h4>
			            <hr/>
			            <p><strong>Diagnostic: </strong>Acute Anxiety</p>
			            <p><strong>Condition: </strong>Recovering</p>
			            <p><strong>Next Meeting: </strong>09 Oct</p>
			            {/* PATIENT QUOTE */}
			            <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>"I think that reaching out to Dr. Pedersen was one of the best decissions I've ever made. Anxiety used to chase me around the house. Now we're really good flatmates, haha!"</p>
			            <br/>
			            <button type="button" class="btn btn-dark">Details</button>
			          </div>
			        </div>
			        {/* PATIENT CARD */}
			      </div>
			      {/* GRID COLUMN */}

			    </div>
			    {/* GRID ROW */}
			  </section>
			  {/* SECTION CONTENT */}
			</div>
		)
	}
}