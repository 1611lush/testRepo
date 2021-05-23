import * as React from 'react';
//import CardCityList from './CardCityList';

//import CardDate from './CardDate';
//import CardInner from './CardInner';
//import Cities from '../data/Cities.json'

import {API_KEY, BASE_URL} from '../data/config';

interface CardProps {
	title: string,	
	cities: any,	
	apiRequest: any,
	dataPast?: any,	
}


const CardPast = (props: CardProps) => {
	const urlPast = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=50.100193&lon=53.195873&dt=1621468800&appid=${API_KEY}&units=metric`
	const [cityText, setCityText] =  React.useState('Select city')

	const cityNames = []
	for (const elem of props.cities) {		
	    	cityNames.push(elem[0])		
	}

	const [isShown, setIsShown] = React.useState(false);
	const toggleCities = () => setIsShown(!isShown);


 	const [isActive, setActive] =  React.useState(false);
	const toggleClass = () => {
	    setActive(!isActive);
    };
	
	const [input, setInput] = React.useState('');

	console.log(props.dataPast[0])
	
  	return(

			<React.Fragment>
				<h3 className="forecast__title">
			        {props.title}
			    </h3>
				 	
				    	    

				<div className="forecast__inputs">
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
				          								props.apiRequest(urlPast)						         							
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
					
					<div className="forecast__calendar">
						<input 
							type="text" 
							placeholder="Select date"  
							name="date" 
							className="forecast__input" 
							onFocus={(e) => {
						        e.target.type ='date'
						      }}
							onBlur={(e) => {	
						        e.target.type ='text'
					    	}}
					    	value={input} 
					    	onChange={(e) => {
					    		setInput(e.target.value)
					    	}}
						/>	

					</div>


				</div>			      				

		




			</ React.Fragment>
		)          


}

export default CardPast