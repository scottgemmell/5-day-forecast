import React from "react";
import ForecastDaily from "./ForecastDaily";

export const Forecasts = ({ resource }) => {

	const posts = resource.posts.read().list;

	return (
		<section>		
			<div>
				<h2 className="section-title">
					Forecasts <em>for</em> 
					{/* {forecasts.city.name} */}
				</h2>
				<div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
					{posts
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