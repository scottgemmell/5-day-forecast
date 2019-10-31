import React from "react";
import { Col } from "react-bootstrap";

import { toDayOfTheWeek, getTempStatus } from "../utils/helper.js";
import cloudyDay from "../assets/svgs/vendor/amcharts/animated/cloudy.svg";
import rainyDay from "../assets/svgs/vendor/amcharts/animated/rainy-5.svg";
import sunnyDay from "../assets/svgs/vendor/amcharts/animated/day.svg";
import clearDay from "../assets/svgs/vendor/amcharts/animated/thunder.svg";
import snowyDay from "../assets/svgs/vendor/amcharts/animated/snowy-6.svg";

const ForecastDaily = ({ dt_txt, weather, main: { temp } }) => (
	<div className="c-day c-day@small c-day@medium">
		<Col xs={6} className="c-day__body">
			<dl>
				<dt>
					Day:
				</dt>
				<dd>
					{toDayOfTheWeek(dt_txt)}
				</dd>
				<dt>
					Weather:
				</dt>
				<dd>
					{weather[0].main === "Clear" && <div>Clear <br/><small className="notice">! No weather icon for clear so using thunder</small></div>}
					{weather[0].main !== "Clear" && <div>{weather[0].main}</div>}
				</dd>
				<dt>
					Description:
				</dt>
				<dd>
					{weather[0].description}
				</dd>
				<dt>
					Temperature:
				</dt>
				<dd>
					<span className={`a-temp a-temp--${getTempStatus(temp)}`}>{temp}&deg;</span>
				</dd>
			</dl>
		</Col>
		<Col xs={6} className="c-day__head">
			{weather[0].main === "Rain" && <div>
				<img src={rainyDay} alt="Rain" />
			</div>}
			{weather[0].main === "Clouds" && <div>
				<img src={cloudyDay} alt="Clouds" />
			</div>}
			{weather[0].main === "Clear" && <div>
				<img src={clearDay} alt="Clear" />
			</div>}
			{weather[0].main === "Sunny" && <div>
				<img src={sunnyDay} alt="Sunny" />
			</div>}
			{weather[0].main === "Snowy" && <div>
				<img src={snowyDay} alt="Snowy" />
			</div>}
		</Col>
	</div>
);

export default ForecastDaily;
