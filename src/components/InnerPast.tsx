import * as React from 'react';

interface InnerPastProps {
   	dataResult?: any
}



const InnerPast = (props: InnerPastProps) => {
	
	const weatherProps:any = []
	
	
	if (props.dataResult[0].length > 6) {
		for (var i = 0; i < props.dataResult[0].length; i++) { 
	       weatherProps.push(
		       	<div className="forecast__result forecast__result_full" key={Math.random()}>
			    	<h4 className="forecast__date">{new Date(props.dataResult[0][i]*1000).toLocaleDateString()}</h4>
			    	<img src={`http://openweathermap.org/img/wn/${props.dataResult[2][i]}@2x.png`} alt="empty" className="forecast__img " />
			    	<p className="forecast__temp">+{props.dataResult[1][i]}°</p>
			    </div>
			) 
  		}
  	}

	const [margin, setMargin] = React.useState(0);
	const toSrart = () => {
		if (margin == 0) setMargin(-183)		
		if (margin <= -915) setMargin(0)
	}
	


	const dateFormated = new Date(props.dataResult[0]*1000);

	return(	
		<React.Fragment>
			{props.dataResult[0].length < 6 ? (	

				<div className="forecast__result forecast__result_full">						
					<p className="forecast__date">{dateFormated.toLocaleDateString()}  </p>	
					<img src={`http://openweathermap.org/img/wn/${props.dataResult[2]}@2x.png`}  alt="" className="forecast__img" />
			    	<p className="forecast__temp">+{props.dataResult[1]}°</p>
		    	</div>	
		   	
		   	) : (

		   	<div className="slider">

		   		{margin != 0 && <span className="slider__btn slider__left" 
		   			onClick={		          							
			          	(event: any) => {
			          		setMargin(margin + 183)				    		
				    		toSrart()
				    	}}></span>
				}			    		
				    		
		    		<div className="slider__inner" style = {{marginLeft : margin}}>
			    	
	      				{weatherProps}
			    		

			    	</div>

	    	  	<span className="slider__btn slider__right" onClick={		          							
			          	(event: any) => {
				    		setMargin(margin - 183)
				    		toSrart()
				    	}}></span>	
	        </div>


			)}


		</ React.Fragment>	


	)
}
	

export default InnerPast