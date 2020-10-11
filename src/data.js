export const data = [
{
	id: 1,
	totalEarnings: 10000,
	sessions: 10,
	cancellations: 1,
	fee: function() {
		return (this.totalEarnings/(this.sessions-this.cancellations));
	} 
		
},

{
	id: 2,
	totalEarnings: 3600,
	sessions: 3,
	cancellations: 0,
	fee: function() {
		return (this.totalEarnings/(this.sessions-this.cancellations));
	} 
},

{
	id: 3,
	totalEarnings: 5000,
	sessions: 5,
	cancellations: 0,
	fee: function() {
		return (this.totalEarnings/(this.sessions-this.cancellations));
	} 
}];

