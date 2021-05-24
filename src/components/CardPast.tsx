import * as React from 'react';
import {API_KEY, BASE_URL} from '../data/config';



interface CardProps {
	title: string,	
	cities: any,	
	apiRequest: (url:string) => void
}


const CardPast: React.FC<CardProps> = (props: CardProps) => {

	const urlPast = 'data/2.5/onecall/timemachine?'
	const [cityText, setCityText] =  React.useState('Select city')

	const cityNames:any = []
	for (const elem of props.cities) {		
    	cityNames.push(elem)		
	}

	const [isShown, setIsShown] = React.useState(false);
	const toggleCities = () => setIsShown(!isShown);


 	const [isActive, setActive] =  React.useState(false);
	const toggleClass = () => {
	    setActive(!isActive);
    };
	

	const [choosenDay, setChoosenDay] = React.useState<any>(null)

	const [latInput, setLatInput] = React.useState('')
	const [lonInput, setLonInput] = React.useState('')
	
	const makeRequestDate = (target: string) => {
		const formattedDate = parseInt((new Date(target).getTime() / 1000).toFixed(0))
		setChoosenDay(formattedDate)
	    props.apiRequest(`${BASE_URL}${urlPast}lat=${latInput}&lon=${lonInput}&dt=${formattedDate}&appid=${API_KEY}&units=metric`)					         							          			
	}
	const makeRequest = (lat: string, lon: string) => {		
		choosenDay && props.apiRequest(`${BASE_URL}${urlPast}lat=${lat}&lon=${lon}&dt=${choosenDay}&appid=${API_KEY}&units=metric`)	
	}

	const maxDate = new Date().toISOString().split("T")[0]
	const fiveDay = Date.now() - 432000000
	const minDate = new Date(fiveDay).toISOString().split("T")[0]

	
  	return(

		<React.Fragment>
			<h3 className="forecast__title">
		        {props.title}
		    </h3>
			 		    

			<div className="forecast__inputs">
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
	          						<li key={elem[0]} 
		          						onClick={		          							
		          							(event: any) => {
		          								setCityText(elem[0])	
		          								setIsShown(!isShown)
		          								toggleClass() 
		          								setLatInput(elem[1])
		          								setLonInput(elem[2])
		          								makeRequest(elem[1], elem[2])
		          												    		
	          								}	          								
	          							}>{elem[0]} </li>
		          					)						
						            
						        })			
							}

			            </ul>
			        }

				</div>		
				
				<div className="forecast__calendar" >
					<input 
						type="date" 
						placeholder="Select date"  
						name="datePast" 
						className="forecast__input" 
						//api rule: only 5 days in past
				  		min={minDate} 
				  		max={maxDate}
				    	onChange={(e) => {		    			
	    					makeRequestDate(e.target.value)
				    	}}
				    	defaultValue={''}
					/>	

				</div>

			</div>	

		</ React.Fragment>
	)          

}

export default CardPast