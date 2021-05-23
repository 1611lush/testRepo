import * as React from 'react';
//import CardCityList from './CardCityList';
//import CardInner from './CardInner';
//import Cities from '../data/Cities.json'

import {API_KEY, BASE_URL} from '../data/config';

interface CardProps {
	title: string,
	cities?: any,
	apiRequest: any,	
   	dataDaily?: any
}


const CardDaily = (props: CardProps) => {
	const urlDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=50.100193&lon=53.195873&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
	const [cityText, setCityText] =  React.useState('Select city')

	const cityNames = []
	for (const elem of props.cities) {
		//if (elem !== 'empty') {
	    	cityNames.push(elem[0])
		//}	
	}

	const [isShown, setIsShown] = React.useState(false);
	const toggleCities = () => setIsShown(!isShown);


 	const [isActive, setActive] = React.useState(false);
	const toggleClass = () => {
	    setActive(!isActive);
    };



  		return(

			<div className="forecast ">
				<h3 className="forecast__title">
			        {props.title}
			    </h3>
				 	
				        

				<div className={isActive ? 'forecast__select forecast__select-up': 'forecast__select'} >
			
					<span onClick={		          							
							(event: any) => {
								toggleCities()
								toggleClass() 								         							
							}	          								
						}>
						{cityText}
					</span>

					{isShown &&
						<ul className="forecast__cities">	
					
							{cityNames.map((elem: any) => {

		          					return (
		          						<li key={elem} 
			          						onClick={		          							
			          							(event: any) => {
			          								setCityText(elem)	
			          								setIsShown(!isShown)
			          								toggleClass()   
			          								props.apiRequest(urlDaily)						         							
		          								}	          								
		          							}          							 
		          						>
		          						{elem} </li>
		          					)						
						            
						        })			
							}

			            </ul>
			        }

				</div>			    


			  	<div className="forecast__result forecast__result_full">
						
							<p className="forecast__date">45345  </p>	
							<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className="forecast__img" />
					    	<p className="forecast__temp">+17°</p>
			    	

			    	</div>	



			</div>
		)          


}

export default CardDaily