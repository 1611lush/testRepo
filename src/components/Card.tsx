import * as React from 'react';

interface Props {
	title: string
}
// api key 536c5078bfa32aff06e5cce728dc5f42 //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=536c5078bfa32aff06e5cce728dc5f42

let Cities = [
	{
		id: 1,
		value: "samara",
		name: "Самара",
		longitude: 53.195873,
		latitude: 50.100193
	},
	{
		id: 2,
		value: "tolyatti",
		name: "Тольятти",
		longitude: 53.507836,
		latitude: 49.420393
	},
	{
		id: 3,
		value: "saratov",
		name: "Саратов",
		longitude: 51.533557,
		latitude: 46.034257
	},
	{
		id: 4,
		value: "kazan",
		name: "Казань",
		longitude: 55.796127,
		latitude: 49.106405
	},
	{
		id: 5,
		value: "krasnodar",
		name: "Краснодар",
		longitude: 45.035470,
		latitude: 38.975313
	},
]


const Card = (props: Props) => (

  
		<div className="forecast ">
			<h3 className="forecast__title">
		        {props.title}
		    </h3>

			 
			<div className="forecast__cities">
			    <input type="text" className="forecast__select forecast__cities_result" />

			    <ul className="forecast__cities_list">
			    	<li>Саратов</li>
			    	<li>Самара</li>
			    	<li>Новосибирск</li>
			    	<li>Краснодар</li>
			    </ul>

			</div>

		    <div className="forecast__result forecast__result_empty">
		    	<img src="./bg160.svg" alt="empty" className="forecast__img forecast__img-" />
		    	<span className="forecast__text">Fill in all the fields and the weather will be displayed</span>
		    </div>
		</div>



)

export default Card