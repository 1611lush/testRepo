import * as React from 'react';

interface InnerDailyProps {
   	dataResult?: any
}



const InnerDaily: React.FC<InnerDailyProps> = (props: InnerDailyProps) => {
	const weatherProps:any = []
	const monthNames: string[] = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "decr"];

	for (var i = 0; i < props.dataResult[0].length; i++) { 
		const dateFormated = new Date(props.dataResult[0][i]*1000).toLocaleString("en-US").split(",")[0]	
		const monthName: any = dateFormated.split("/")[0]
		const finalDate: string = (dateFormated.split("/")[1] + ' ' + monthNames[monthName - 1] + ' ' + dateFormated.split("/")[2])

        weatherProps.push(
	       	<div className="forecast__result forecast__result_full" key={Math.random()}>
		    	<h4 className="forecast__date">{finalDate}</h4>
		    	<img src={`http://openweathermap.org/img/wn/${props.dataResult[2][i]}@2x.png`} alt="" className="forecast__img " />
		    	<p className="forecast__temp">+{props.dataResult[1][i]}°</p>
		    </div>

		) 
	}
  	
	const [margin, setMargin] = React.useState(0);
	const toSrart = () => {
		if (margin === 0) setMargin(-183)		
		if (margin <= -915) setMargin(0)
	}	

	return(	
		
		   	<div className="slider">

		   		{margin !== 0 && <span className="slider__btn slider__left" 
		   			onClick={		          							
			          	(event: any) => {
			          		setMargin(margin + 183)				    		
				    		toSrart()
				    	}
				    }></span>
				}			    		
				    		
		    		<div className="slider__inner" style = {{marginLeft : margin}}>
			    	
	      				{weatherProps}			    		

			    	</div>

	    	  	<span className="slider__btn slider__right" onClick={		          							
		          	(event: any) => {
			    		setMargin(margin - 183)
			    		toSrart()
			    	}
				}></span>	
	        </div>

		)

	}
	

export default InnerDaily