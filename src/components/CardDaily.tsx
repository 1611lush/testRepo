import * as React from 'react';
import {API_KEY, BASE_URL} from '../data/config';



interface CardProps {
	title: string,
	cities?: any,
	apiRequest: any,	
   	dataDaily?: any
}


const CardDaily = (props: CardProps) => {
	const urlDaily = 'data/2.5/onecall?'
	const [cityText, setCityText] =  React.useState('Select city')

	const cityNames:any = []
	for (const elem of props.cities) {		
    	cityNames.push(elem)		
	}

	const [isShown, setIsShown] = React.useState(false);
	const toggleCities = () => setIsShown(!isShown);


 	const [isActive, setActive] =  React.useState(false);
	const toggleClass = () => {
	    setActive(!isActive);
    };
	

  		return(

			<React.Fragment>

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
						<ul className="forecast__cities" id="1">	
					
							{cityNames.map((elem: any) => {

		          					return (
		          						<li key={elem[0]} 
			          						onClick={		          							
			          							(event: any) => {
			          								 
			          								setCityText(elem[0])	
			          								setIsShown(!isShown)
			          								toggleClass() 
			          								props.apiRequest(`${BASE_URL}${urlDaily}lat=${elem[1]}&lon=${elem[2]}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`)						         							
		          													    			
			    													         							
		          								}	          								
		          							}          							 
		          						>
		          						{elem[0]} </li>
		          					)						
						            
						        })			
							}

			            </ul>
			        }

				</div>			    

			</ React.Fragment>
		)          


}

export default CardDaily