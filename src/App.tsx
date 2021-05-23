import * as React from 'react';
import './App.css';
//import Header from './components/Header';
//import Wrapper from './components/Wrapper';
//import Footer from './components/Footer';
//import Main from './components/Main';

//import { apiRequest } from './helpers'
import CardDaily from './components/CardDaily';
import CardPast from './components/CardPast';
import InnerPast from './components/InnerPast';
import {API_KEY, BASE_URL, cities} from './data/config';



const App = () => {

  const URL_DAILY = `https://api.openweathermap.org/data/2.5/onecall?lat=50.100193&lon=53.195873&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
  //"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=daily&appid=${API_KEY}"
  //const URL_PAST = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid=${API_KEY}"
  const URL_PAST = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=50.100193&lon=53.195873&dt=1621468800&appid=${API_KEY}`
  const URL_ICON = "http://openweathermap.org/img/wn/10d@2x.png"


  const [weather, setWeather] = React.useState(null)
  const [city, setCity] = React.useState(null) 
  const [error, setError] = React.useState('')
  const [dataDaily, setDataDaily] = React.useState([Array(), Array(), Array()])
  const [dataPast, setDataPast] = React.useState(['', 0, ''])

  const datesArr = Array()
  const tempArr = Array()
  const iconArr = Array()

    const apiRequest = (url: any) => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {          
        console.log(response)    
          setError(response.statusText)
        }
        return response.json() 
      })  
      .then(result => {  
        if (result.daily) {        
      
        for (let i = 0; i<=7; i++) {
          datesArr.push(result.daily[i].dt) 
          tempArr.push(Math.round(result.daily[i].temp.day))           
          iconArr.push(result.daily[0].weather[0].icon) 
        }
        setDataDaily([          
             datesArr, 
             tempArr,
             iconArr
           ])
        }            
        if (result.current) {
            setDataPast([
            result.current.dt,
              Math.round(result.current.temp),
              result.current.weather[0].icon
          ])
        }  
      })
  }

  // const empyInner = () {
  //   return <EmptyInner>
  // }

  const showPast = () => {
    if (error) return 'test'
    if (!dataPast) return 
        <div className="forecast__result forecast__result_empty">
          <img src="assets/images/bg160.svg" alt="empty" className="forecast__img " />
          <span className="forecast__text">Fill in all the fields and the weather will be displayed</span>
        </div>    
    return <InnerPast date={dataPast[0]} temperature={dataPast[1]} icon={dataPast[2]} />
  }

  // const showFuture = () => {
    
  // }
  
  



  return (
    <div className="page">
      <header className="header">
          <h1 className="header__text">
            <span className="header__title header__title_left">Weather</span>
            <span className="header__title header__title_right">forecast</span>
          </h1>
        </header>



        <section className="content">        
        
          <CardDaily 
            title="7 Days Forecast"
            cities={cities} 
            apiRequest={apiRequest} 
            dataDaily={dataDaily}></CardDaily>

            <div className="forecast forecast-past">
              <CardPast 
                title="Forecast for a Date in the Past" 
                cities={cities}  
                apiRequest={apiRequest}
                dataPast={dataPast}></CardPast>
              
                {showPast()}

            </div>

         </section>



      <footer className="footer">
        C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT
      </footer>
    </div>
  )
}  

export default App