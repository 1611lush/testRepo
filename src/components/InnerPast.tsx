import * as React from 'react';

interface InnerPastProps {
   	dataResult?: any
}



const InnerPast: React.FC<InnerPastProps> = (props: InnerPastProps) => {
	const monthNames: string[] = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "decr"];
	const dateFormated = new Date(props.dataResult[0]*1000).toLocaleString("en-US").split(",")[0]	
	const monthName: any = dateFormated.split("/")[0]
	const finalDate: string = (dateFormated.split("/")[1] + ' ' + monthNames[monthName - 1] + ' ' + dateFormated.split("/")[2])


	return(	

			<div className="forecast__result forecast__result_full">						
				<p className="forecast__date">{finalDate}  </p>	
				<img src={`http://openweathermap.org/img/wn/${props.dataResult[2]}@2x.png`}  alt="" className="forecast__img" />
		    	<p className="forecast__temp">+{props.dataResult[1]}°</p>
	    	</div>	

	)
}
	

export default InnerPast