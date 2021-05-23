import * as React from 'react';

interface InnerPastProps {
   	dataPast?: any, 
   	date?: any,   
   	temperature?: any,
   	icon?: any
}



const InnerPast = (props: InnerPastProps) => {
	const dateFormat = new Date(props.date*1000);
	

	return(
		<div className="forecast__result forecast__result_full">						
			<p className="forecast__date">{props.date}  </p>	
			<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}  alt="" className="forecast__img" />
	    	<p className="forecast__temp">+{props.temperature}°</p>
    	</div>	
    				


	)
}
	

export default InnerPast