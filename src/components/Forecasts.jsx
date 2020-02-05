import React from "react";
import ForecastDaily from "./ForecastDaily";

function suspensify(promise) {
	let status = "pending";
	let result;
	let suspender = promise.then(
		response => {
			status = "success";
			result = response;
		},
		error => {
			status = "error";
			result = error;
		}
	);
	
	return {
		read() {
			console.log('status', status);
			// pending 
			if(status === "pending") throw suspender;
			// rejected
			if(status === "error") throw result;
			// resolve
			if(status === "success") return result;
		}
	}
}

const weather = suspensify(fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stirling,UK&units=metric&appid=e9d4c67ad81c4d73f2ad231f6092f6c3").then(res => res.json()));

export const Forecasts = () => {
	return (
		<section>		
			<div>
				<h2 className="section-title">
					Forecasts <em>for</em> 
					{/* {forecasts.city.name} */}
				</h2>
				<div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
					{weather
						.read().list
						.filter((_k, v) => ((
							v % 8 === 0) ? true : false
						))
						.map((item, i) => (
							<ForecastDaily {...item} key={i} />
						))
					}
				</div>
			</div>
		</section>
	);
};

export default Forecasts;