import * as React from 'react';
import CardCityList from './CardCityList';

import CardDate from './CardDate';

import CardInner from './CardInner';
import Cities from '../data/Cities.json'


interface CardProps {
	title: string,	
	cityTest: any,
	cities: any,
}


const CardPast = (props: CardProps) => {
		
  		return(

			<div className="forecast forecast-past">
				<h3 className="forecast__title">
			        {props.title}
			    </h3>
				 	
				    	    

				<div className="forecast__inputs">
					<CardCityList cityTest={props.cityTest} cities={props.cities}/>	
					<CardDate />	
				</div>			      				

			  	<CardInner />




			</div>
		)          


}

export default CardPast