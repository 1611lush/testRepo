import * as React from 'react';
import CardDaily from './CardDaily';
import CardPast from './CardPast';
import {API_KEY, BASE_URL} from '../data/config';


// const cities = [
// 	[
// 		"Samara", 53.195873, 50.100193
// 	],
// 	[		
// 		"Tolyatti", 53.507836, 49.420393
// 	],
// 	[		
// 		"Saratov", 51.533557, 46.034257
// 	],
// 	[		
// 		"Kazan", 55.796127, 49.106405
// 	],
// 	[		
// 		"Krasnodar", 45.035470, 38.975313
// 	]
// ]

	   
// const cityTest = ["Samara", "Tolyatti", "Saratov","Kazan","Krasnodar"]


const Main = () => {


	// const URL_DAILY = `https://api.openweathermap.org/data/2.5/onecall?lat=50.100193&lon=53.195873&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
	// //"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=daily&appid=${API_KEY}"
	// //const URL_PAST = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid=${API_KEY}"
	// const URL_PAST = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=50.100193&lon=53.195873&dt=1621468800&appid=${API_KEY}`
	// const URL_ICON = "http://openweathermap.org/img/wn/10d@2x.png"



	// const [weather, setWeather] = React.useState(null)

	// const [city, setCity] = React.useState(null) 
	// const [error, setError] = React.useState('')


 //  	const [dataDaily, setDataDaily] = React.useState([Array(), Array(), Array()])

	// const [dataPast, setDataPast] = React.useState(['', 0, ''])

	// const datesArr = Array()
	// const tempArr = Array()
	// const iconArr = Array()

 //  	const apiRequest = (url: any) => {
	//   return fetch(url)
	//     .then(response => {
	//       if (!response.ok) {	      	
	//     	console.log(response)  	
	//         setError(response.statusText)
	//       }
	//       return response.json() 
	//     })  
	//     .then(result => {  
	//     	if (result.daily) {	    	
			
	// 			for (let i = 0; i<=7; i++) {
	// 				datesArr.push(result.daily[i].dt) 
	// 				tempArr.push(Math.round(result.daily[i].temp.day)) 					
	// 				iconArr.push(result.daily[0].weather[0].icon) 
	// 			}
	// 			setDataDaily([					
	// 	     		datesArr, 
	// 	     		tempArr,
	// 	     		iconArr
	// 	     	])
	//     	}		    		
	//     	if (result.current) {
 //   			   setDataPast([
	// 		    	result.current.dt,
	// 		        Math.round(result.current.temp),
	// 		        result.current.weather[0].icon
	// 		    ])
	//     	}	
	//     })
	// }

  
 //  	React.useEffect(() => {
 //  		//apiRequest(URL_DAILY)
	// 	 //let daily = api(URL_DAILY)
	//     //let past = api(URL_PAST)
	// }, [])




  

	

	return (
	    <section className="content">	    	
		    
		    

		</section>
	)
}

export default Main