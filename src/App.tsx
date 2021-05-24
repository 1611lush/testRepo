import * as React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import CardDaily from './components/CardDaily';
import CardPast from './components/CardPast';
import InnerPast from './components/InnerPast';
import InnerDaily from './components/InnerDaily';
import Empty from './layout/Empty';

import {cities} from './data/config';




const App = () => {
  const [error, setError] = React.useState('')  
  const [errorPast, setErrorPast] = React.useState('')
  const [dataDaily, setDataDaily] = React.useState<any>(null)
  const [dataPast, setDataPast] = React.useState<any>(null)

  const datesArr: number[] = []
  const tempArr: number[] = []
  const iconArr: string[] = []

  const apiRequest = (url: string) => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {        
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
          setError('')
          setDataDaily([          
           datesArr, 
           tempArr,
           iconArr
         ])   
        }
      })
  }

  const apiRequestPast = (url: string) => {
    return fetch(url)
      .then(response => {
        if (!response.ok) { 
          setErrorPast(response.statusText)
        }
        return response.json() 
      })  
      .then(result => { 
        if (result.current) {
          setErrorPast('')
          setDataPast([
            result.current.dt,
            Math.round(result.current.temp),
            result.current.weather[0].icon
          ])
        }
      })
  }
   


  const showDaily = () => {
    if (error || !dataDaily) {
      return  <Empty/> 
    }
    return  <InnerDaily dataResult={dataDaily} />
  }

  const showPast = () => {
    if (errorPast || !dataPast) {
      return  <Empty/> 
    }    
    return  <InnerPast dataResult={dataPast} />
  }



  return (

    <div className="page">

        <Header />

        <section className="content">   

          <div className="forecast">

            <CardDaily 
              title="7 Days Forecast"
              cities={cities} 
              apiRequest={apiRequest} 
             ></CardDaily>

            {showDaily()}

          </div>

          <div className="forecast forecast-past">

            <CardPast 
              title="Forecast for a Date in the Past" 
              cities={cities}  
              apiRequest={apiRequestPast}
            ></CardPast>
             
            {showPast()}

          </div>

         </section>

      <Footer />

    </div>

  )

}  

export default App