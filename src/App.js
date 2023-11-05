import React from "react";
import PieChartWithClock from "./Components/PieChartWithClock";

const App = () => {
  return (
	<div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
		<div className="max-w-7xl mx-auto">
			<div className="relative group">
				<div className="flex flex-col items-top justify-start relative px-7 py-3 bg-white ring-1 ring-gray-900/5 rounded-3xl leading-none space-x-6">
					
					{/* Header Element */}
					<div className="flex flex-row items-center justify-center mb-3">
						<div className="flex flex-row justify-center grow text-lg font-semibold" >
							<p>Flow Peaks</p>
						</div>
						<div className="flex flex-row justify-end">
							<i className="flex-1 fa-solid fa-circle-info w-1 fa-lg" style={{color:'#74C0FC'}} ></i>
						</div>
					</div>
	
					{/* Clock-Pie Chart Element */}
					<div className="flex flex-row" >
						<div className="ml-0 flex flex-row justify-center items-center" >
							<p>Evening</p>
						</div>
						<div className="flex flex-col" >
						<div className="flex flex-row justify-center items-center" >
							<p>Night</p>
						</div>
						<div>
							<PieChartWithClock />
						</div>
						<div className="flex flex-row justify-center items-center" >
							<p>Afternoon</p>
						</div>
						</div>
						<div className="flex flex-row justify-center items-center">
							<p>Morning</p>
						</div>
					</div>

					{/*Footer Element */}
					<div className="flex flex-row items-center justify-end ">
						<div style={{padding:'10px 20px 10px 20px', background: "#D8D8D8", border: "1px solid #CACACA", borderRadius: '10px'}}>
							April
						</div>
					</div>
		
				</div>
			</div>
		</div>
	</div>
  );
};

export default App;





