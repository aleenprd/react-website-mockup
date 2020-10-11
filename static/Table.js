import React from 'react';
import { Component } from 'react';

export default class Table extends Component {
	render() {
		return (
			<div class="table-responsive-lg">
			 	<table class="table">
			 		{/* TABLE HEADER */}
				    <thead>
				      <tr>
				        <th scope="col">Patient</th>
				        <th scope="col" class="text-right">Sessions</th>
				        <th scope="col" class="text-right">Fee/Session</th>
				        <th scope="col" class="text-right">Cancellations</th>
				      </tr>
				    </thead>
					{/* TABLE HEADER */}

					{/* TABLE BODY */}
				    <tbody>
				      <tr>
				        <td>Patient 1</td>
				        <td align="right">10</td>
				        <td align="right">1.111</td>
				        <td align="right">1</td>
				      </tr>
				      <tr>
				        <td>Patient 2</td>
				        <td align="right">3</td>
				        <td align="right">1.200</td>
				        <td align="right">0</td>
				      </tr>
				      <tr>
				        <td>Patient 3</td>
				        <td align="right">5</td>
				        <td align="right">1.000</td>
				        <td align="right">0</td>
				      </tr>
				    </tbody>
				    {/* TABLE BODY */}
			  	</table>
			</div>
		)
	}
}
