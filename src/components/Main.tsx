import * as React from 'react';
import CardDaily from './CardDaily';
import CardPast from './CardPast';
import {API_KEY, BASE_URL} from '../data/config';

//import { useState } from 'react';


const cities = [
	[
		"Samara", 53.195873, 50.100193
	],
	[		
		"Tolyatti", 53.507836, 49.420393
	],
	[		
		"Saratov", 51.533557, 46.034257
	],
	[		
		"Kazan", 55.796127, 49.106405
	],
	[		
		"Krasnodar", 45.035470, 38.975313
	]
]

 	// const [city, SetCity] = React.useState<Key>('Samara')
	   
const cityTest = ["Samara", "Tolyatti", "Saratov","Kazan","Krasnodar"]


const Main = () => {


	const URL_DAILY = `https://api.openweathermap.org/data/2.5/onecall?lat=50.100193&lon=53.195873&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
	//"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=daily&appid=${API_KEY}"
	//const URL_PAST = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid=${API_KEY}"
	const URL_PAST = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=50.100193&lon=53.195873&dt=1621468800&appid=${API_KEY}`
	const URL_ICON = "http://openweathermap.org/img/wn/10d@2x.png"



	const [weather, setWeather] = React.useState(null)
	const [city, setCity] = React.useState(null) 
	const [error, setError] = React.useState(null)
	const [latitude, setLatitude] = React.useState(null)
  	const [longitude, setLongitude] = React.useState(null)


  	const [data, setData] = React.useState({city: '', longitude: '', latitude: '', temperature: ''})

	function api<T>(url: string) {
	  return fetch(url)
	    .then(response => {
	      if (!response.ok) {	      	
	    	console.log(response)  	
	        //throw new Error(response.statusText)
	      }
	      return response.json() 
	    })  
	    .then(result => {  
	    	console.log(result)  	
	        return result
	    }
	    )
	}
  
  	React.useEffect(() => {
  		//api(URL_DAILY)
		 //let daily = api(URL_DAILY)
	    //let past = api(URL_PAST)
	}, [])

	// if (!cities.includes(data.city) && data.city) {
	// 	cities.push(data.city)
	// }



  

	

	return (
	    <section className="content">
	    	
		    
		    <CardDaily title="7 Days Forecast" cityTest={cityTest} cities={cities}></CardDaily>
	        <CardPast title="Forecast for a Date in the Past"  cityTest={cityTest} cities={cities}></CardPast>


		</section>
	)
}

export default Main