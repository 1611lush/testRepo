import * as React from 'react';

interface CardInnerProps {
   	temp?: string,
   	date?: number,
   	icon?: string,
   	dataPast?: any,   	
   	dataDaily?: any
}



const CardInner = (props: CardInnerProps) => {
	// const [innerShown, setInnerShown] = React.useState(false);

	// if (props.dataDaily) {
	// 	setInnerShown 
	// }


	

	return(
				<div className="forecast__result forecast__result_full">
						
							<p className="forecast__date">45345  </p>	
							<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className="forecast__img" />
					    	<p className="forecast__temp">+17°</p>
			    	

			    	</div>	
    				


	)
}
	

export default CardInner