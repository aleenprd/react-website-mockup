import React from 'react';
import { Component } from 'react';

export default class Inspirational extends Component {
	render() {
		return(
			<div class="container mt-5 d-flex justify-content-around">
			{/* SECTION */}
			   <section class="dark-grey-text">

			   		{/* GRID ROW */}
			    	<div class="row pr-lg-5">

				    	{/* GRID COLUMN */}
					    <div class="col-md-7 mb-4">
					        <div class="view">
					           <a href="https://ibb.co/ngtTfxg">
					           		<img src="https://i.ibb.co/X2M9pc2/dashboardstuff.png" class="img-fluid" alt="dashboardstuff" />
					           	</a>
					        </div>
					    </div>
						{/* GRID COLUMN */}

			       		<br/><br/>

				       {/* GRID COLUMN */}
				       <div class="col-md-5 d-flex align-items-top">
					       	<div>
					           <div class="callToAction">

						            <h3 class="font-weight-bold mb-4">Be Present from Anywhere!</h3>

						           	{/* INSPIRATIONAL TEXT */}
						            <p id='inspirationalText'>We at Healper strive to deliver the best possible solutions for Patients and Professionals. 
						               	Now, in order for you and your client to share the same <em>pulse</em>, we are currently excited to reveal that we are
						                working on a new digital environment. You will soon be able to benefit from the power of <strong>AI</strong> and <strong>IOT</strong> 
						                for a never-before seen approach to mental healthcare.
						            </p>
						        	{/* INSPIRATIONAL TEXT */}

					            	<br/>

						            {/* CALL TO ACTION LINKS */}
						            <ul class="list-unstyled list-inline text-md-left py-2">
						              <li class="list-inline-item">
						                <h5 class="mb-1"><strong>Register for Beta</strong></h5>
						              </li>
						              <li class="list-inline-item">
						                <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
						              </li>
						            </ul>
						            {/* CALL TO ACTION LINKS */}
					        	</div>
				    		</div>
				    	</div>
				    	{/* GRID COLUMN */}

			     	</div>
			     	{/* GRID ROW */}

			   </section>
			{/* SECTION */},

			</div>
		)
	}
}


