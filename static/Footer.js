import React from 'react';
import { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer class="page-footer font-small stylish-color-dark pt-4">
			    <div class="container text-center text-md-left">
			      {/* GRID ROW */}
			      <div class="row">

				        {/* GRID COLUMN */}
				        <div class="col-md-4 mx-auto">
				    		{/* FOOTER CONTENT */}
					          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
					          <hr/>
					          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
					            consectetur
					            adipisicing elit. And some other stuff.</p>
							{/* FOOTER CONTENT */}
				        </div>
				        {/* GRID COLUMN */}

				        <hr class="clearfix w-100 d-md-none"/>

				        {/* GRID COLUMN */}
				        <div class="col-md-2 mx-auto">
				          {/* FOOTER LINKS */}
				          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
				          <hr/>
				          <ul class="list-unstyled bottomLink">
				            <li>
				              <a class="bottomLink" href="#!">By Alin Preda</a>
				            </li>
				            <li>
				              <a class="bottomLink" href="#!">cristian.alin.preda@gmail.com</a>
				            </li>
				            <li>
				              <a class="bottomLink" href="#!">(+45) 91 70 15 83</a>
				            </li>
				          </ul>
				          {/* FOOTER LINKS */}
				        </div>
				        {/* GRID COLUMN */}

				        <hr class="clearfix w-100 d-md-none"/>


					    {/* SOCIAL BUTTONS */}
					    <ul class="list-unstyled list-inline text-center">
					      <li class="list-inline-item">
					        <a class="btn-floating btn-fb mx-1">
					          <i class="fab fa-facebook-f"> </i>
					        </a>
					      </li>
					      <li class="list-inline-item">
					        <a class="btn-floating btn-tw mx-1">
					          <i class="fab fa-twitter"> </i>
					        </a>
					      </li>
					      <li class="list-inline-item">
					        <a class="btn-floating btn-gplus mx-1">
					          <i class="fab fa-google-plus-g"> </i>
					        </a>
					      </li>
					      <li class="list-inline-item">
					        <a class="btn-floating btn-li mx-1">
					          <i class="fab fa-linkedin-in"> </i>
					        </a>
					      </li>
					      <li class="list-inline-item">
					        <a class="btn-floating btn-dribbble mx-1">
					          <i class="fab fa-dribbble"> </i>
					        </a>
					      </li>
					    </ul>
					    {/* SOCIAL BUTTONS */}
					</div>  
				</div>
				{/* GRID ROW */}

				{/* COPYRIGHT */}
				<div class="footer-copyright text-center py-3">© 2020:
				    <a href="https://mdbootstrap.com/"> Haelper.com</a>
				</div>
				{/* COPYRIGHT */}
			</footer>
		)
	}
}