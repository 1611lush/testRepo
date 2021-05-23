import * as React from 'react';

import {useState} from 'react';
//import CardCityList from './CardCityList';

//import CardDate from './CardDate';
//import CardInner from './CardInner';
//import Cities from '../data/Cities.json'

import {API_KEY, BASE_URL} from '../data/config';


import PageContext from "../Context"


interface CardProps {
	title: string,	
	cities?: any,	
	apiRequest: (url:any) => void,
	//setChoosenDay: any,
//   handleChange : (e:any) => void
}


const CardPast = (props: CardProps) => {
	const [choosenDay, setChoosenDay] = React.useContext(PageContext);

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
	



	const [inputDate, setInputDate] = React.useState('')
	const [latInput, setLatInput] = React.useState('')
	const [lonInput, setLonInput] = React.useState('')
	
	const pastDay = ''
	
	//console.log(props.dataPastArr)
	// const makeRequest = () => {
	// 	  	console.log('1', [choosenDay, setChoosenDay][0], latInput, lonInput)
	// 	//console.log(inputDate, latInput, lonInput)
	// 	//if ([choosenDay, setChoosenDay][0] && latInput) {
	// 	//  	const formatedDate = parseInt((new Date(inputDate).getTime() / 1000).toFixed(0))
		
	// 		props.apiRequest(`${BASE_URL}${urlPast}lat=${latInput}&lon=${lonInput}&dt=${choosenDay}&appid=${API_KEY}&units=metric`)						         							
	// 	// // 	//console.log(props.apiRequest(`${BASE_URL}${urlPast}lat=${latInput}&lon=${lonInput}&dt=${formatedDate}&appid=${API_KEY}&units=metric`))          								
	// 	//}	
		
	// }


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
							<ul className="forecast__cities" id="2">	
						
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
				          								//makeRequest()
				          								props.apiRequest(`${BASE_URL}${urlPast}lat=${elem[1]}&lon=${elem[2]}&dt=${choosenDay}&appid=${API_KEY}&units=metric`)						         							
			          													    			
				    									console.log('6', choosenDay)
			          								}	          								
			          							}          							 
			          						>
			          						{elem[0]} </li>
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
							// onFocus={(e) => {
						 //        e.target.type ='date'
						 //      }}
							// onBlur={(e) => {	
						 //        e.target.type ='text'
					  //   	}}
					  		min="" 
					    	onChange={(e) => {
					    		setInputDate(e.target.value)
					    		setChoosenDay(parseInt((new Date(e.target.value).getTime() / 1000).toFixed(0)))				    			
				    			console.log('4', e.target.value)				    			
				    			console.log('5', choosenDay)
					    		props.apiRequest(`${BASE_URL}${urlPast}lat=${latInput}&lon=${lonInput}&dt=${choosenDay}&appid=${API_KEY}&units=metric`)						         							
			          				

					    	}}

					    	defaultValue={inputDate || ''}
						/>	

					</div>


				</div>			      				

		




			</ React.Fragment>
		)          


}

export default CardPast