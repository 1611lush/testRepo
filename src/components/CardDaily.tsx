import * as React from 'react';
import CardCityList from './CardCityList';
import CardInner from './CardInner';
import Cities from '../data/Cities.json'


interface CardProps {
	title: string,
	cities?: any,
	cityTest: any,
}


const CardDaily = (props: CardProps) => {
		
  		return(

			<div className="forecast ">
				<h3 className="forecast__title">
			        {props.title}
			    </h3>
				 	
				        

				<CardCityList cityTest={props.cityTest} cities={props.cities}/>				    


			  	<CardInner />



			</div>
		)          


}

export default CardDaily