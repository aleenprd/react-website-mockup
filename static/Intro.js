import React from 'react';
import { Component } from 'react';

export default class Intro extends Component {
  render () {
    return (
      <div class="card card-intro">
        <div class="card-body white-text rgba-black-light text-center">

          {/* GRID ROW */}
          <div class="row d-flex justify-content-center">

            {/* GRID COLUMN */}
            <div class="col-md-6">
              {/* HEADER */}
              <h1 id='welcome' class="animate__animated animate__pulse">
                Welcome to Your Dashboard, Dr. Pederson!
              </h1>
              {/* HEADER */}
              <hr/>
              {/* PARAGRAPH */}
              <p id="welcomeMessage">The Dashboard is a tool that uses the power of Data and Analytics to provide you with the most up-to-date information on your earnings, schedule, feedback and progress. All of this is streamlined and enables you to make educated decisions based on facts, figures and even more.</p>
            </div>
            {/* GRID COLUMN */}
          </div>
          {/* GRID ROW */}
        </div>
      </div>
      )
  }
}