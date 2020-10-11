import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React Components 
import Navbar from './Navbar.js';
import Intro from './Intro.js';
import Overview from './Overview.js';
import Table from './Table.js';
import DoughnutChart from './Chart.js';
import Patients from './Patients.js';
import Inspirational from './Inspirational.js';
import Footer from './Footer.js';


ReactDOM.render(
    <Navbar />,
  	document.getElementById('NAVBAR')
);

ReactDOM.render(
    <Intro />,
  	document.getElementById('INTRO')
);

ReactDOM.render(
    <Overview/>,
  	document.getElementById('OVERVIEW')
);

ReactDOM.render(
    <DoughnutChart/>,
  	document.getElementById('DOUGHNUT')
);

ReactDOM.render(
    <Table/>,
  	document.getElementById('TABLE')
);

ReactDOM.render(
    <Patients/>,
  	document.getElementById('PATIENTS')
);

ReactDOM.render(
    <Inspirational/>,
  	document.getElementById('INSPIRATIONAL')
);

ReactDOM.render(
    <Footer/>,
  	document.getElementById('FOOTER')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
