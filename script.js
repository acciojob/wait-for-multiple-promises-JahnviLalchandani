//your JS code here. If required.
const output=document.getElementById("output");

function createPromise(){
	const time=Math.floor(Math.random()*3)+1;

	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(time);
		},time*1000)
	})
}

const startTime=performance.now();

const promises=[
	createPromise(),
	createPromise(),
	createPromise()
]

Promise.all(promises).then((results)=>{
	const totalTime=(performance.now()-startTime)/1000;

	output.innerHTML="";


	results.forEach((time,index)=>{
		const row=document.createElement("tr");

		row.innerHTML=`
			<td>Promise ${index+1}</td>
			<td>${time}</td>
		`;

		output.appendChild(row);
		
	})
	const totalRow=document.createElement("tr");
	totalRow.innerHTML=`
		<td>Total</td>
		<td>${totalTime.toFixed(3)}</td>
	`;
	output.appendChild(totalRow);
})