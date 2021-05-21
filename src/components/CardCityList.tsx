import * as React from 'react';
import { useState } from 'react';




interface CardSelectProps {
    cities?: any,
    label?: string;
    value?: string,
	cityTest: any
}



const CardCityList = (props: CardSelectProps ) => {
	

	const [cityText, setCityText] =  React.useState('Select city')

	const cityNames = []
	for (const elem of props.cities) {
	    cityNames.push(elem[0])
	}
	




	return(
		<React.Fragment>
		
			<div className="forecast__select forecast__cities_result">
			
				{cityText}

				<ul className="forecast__cities" >				
					

					{cityNames.map((elem: any) => {

          					return (<li key={elem} onClick={(event: any) => {setCityText(elem)}}>{elem}</li>)						
				            
				        })			
					}

	            </ul>
			</div>	
		

		</React.Fragment>
	)
}


export default CardCityList