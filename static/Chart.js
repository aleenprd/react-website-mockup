import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Chart from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

// DATA needs to be formatted according to Chart.js's syntax
const state = {
	labels: [
		'Patient 1',
		'Patient 2',
		'Patient 3'
	],
	datasets: [{
		data: [10000, 3600, 5000],
		backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      	hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      	hoverBorderColor: "rgba(234, 236, 244, 1)",
	}],
};
// DATA

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Creating the Chart
let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;

Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    let chart = this.chart.chart;
    let ctx = chart.ctx;
    let width = chart.width;
    let height = chart.height;

    let fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      sum += chart.config.data.datasets[0].data[i];
    }

    var text = '',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});


export default class DoughnutChart extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          // Options to style the chart by different NameSpaces
          options={{
            // Options to style the title
            title:{
              display:true,
              text:'Total Earnings per Pacient',
              fontSize:30,
              fontColor: '#666',
              fontStyle: 'bold',
              padding: 25,
              margin: 15,
              position: 'top'
            },
            // Options to style the chart
            // Note to self: event on-click => hide clicked element ; show element again
            legend:{
              boxWidth: 80,
              display:true,
              position:'bottom',
              fontSize: 20,
              align: 'center',
              padding: 30,
              fontColor: '#666',
              fontStyle: 'bold',
              margin: 30
            },
            // Customize animation options
            animation: {
              animateRotate: true,
              animateScale: true,
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  return (data['datasets'][0]['data'][tooltipItem['index']].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' DKK');
                },
                afterLabel: function(tooltipItem, data) {
                  var dataset = data['datasets'][0];
                  var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                  return '(' + percent + '%)';
                }
              },
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              borderColor: '#dddfeb',
              bodyFontSize: 20,
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              caretPadding: 100,
            },
            // Global options
            cutoutPercentage: 70,
            responsive: true, 
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}