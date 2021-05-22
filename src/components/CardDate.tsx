import * as React from 'react';

const CardDate = () => {

const [input, setInput] = React.useState('');


	return(
		
	
		<div className="forecast__calendar">
			<input 
				type="text" 
				placeholder="Select date"  
				name="date" 
				className="forecast__input" 
				onFocus={(e) => {
			        e.target.type ='date'
			      }}
				onBlur={(e) => {	
			        e.target.type ='text'
		    	}}
		    	value={input} 
		    	onChange={(e) => {
		    		setInput(e.target.value)
		    	}}
			/>	

		</div>
		)

}

export default CardDate