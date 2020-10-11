import React from 'react';
import { Component } from 'react';

export default class Navbar extends Component {
  render () {
    return (
      <nav class="navbar navbar-custom fixed-top navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="https://thehub-io.imgix.net/files/s3/20191015122338-afabe0f2da184661a531b3d67332c2f7.png?fit=crop&w=300&h=300&q=60"  
          width="40" height="40" class="d-inline-block align-top" alt="logoHealper"/>
        </a>

        {/* TOGGLER */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* TOGGLER */}

          {/* NAVBAR CONTENT */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pacients</a>
              </li>

              {/* DROPDOWN */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Options
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Account</a>
                  <a class="dropdown-item" href="#">Settings & Privacy</a>
                  <a class="dropdown-item" href="#">Help & Support</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Log Out</a>
                </div>
              </li>
              {/* DROPDOWN */}

            </ul>

            {/* SEARCH BUTTON */}
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button type="button" class="btn btn-info">Search</button>
            </form>
            {/* SEARCH BUTTON */}

          </div>
          {/* NAVBAR CONTENT */}

        </nav>
    )
  }
}