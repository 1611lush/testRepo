import * as React from 'react';
import { useState } from 'react';



interface CardSelectProps {
    cities?: any,
    label?: string;
    value?: string,
	apiRequest: any,	
	urlDaily?: string,	
	urlPast?: string
}



const CardCityList = (props: CardSelectProps ) => {


	const [cityText, setCityText] =  React.useState('Select city')

	const cityNames = []
	for (const elem of props.cities) {
		//if (elem !== 'empty') {
	    	cityNames.push(elem[0])
		//}	
	}

	const [isShown, setIsShown] = React.useState(false);
	const toggleCities = () => setIsShown(!isShown);


 	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
	    setActive(!isActive);
    };




	return(
		<React.Fragment>
		
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
		          								props.apiRequest(props.urlDaily)						         							
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
		

		</React.Fragment>
	)
}


export default CardCityList