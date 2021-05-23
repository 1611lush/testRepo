import * as React from 'react';
import './App.css';
import Header from './layout/Header';
//import Wrapper from './components/Wrapper';
import Footer from './layout/Footer';
//import Main from './components/Main';

//import { apiRequest } from './helpers'
import CardDaily from './components/CardDaily';
import CardPast from './components/CardPast';

import InnerPast from './components/InnerPast';

import Empty from './layout/Empty';


import {API_KEY, BASE_URL, cities} from './data/config';

import CardInner from './components/CardInner';
import PageContext from "./Context"



const App = () => {

  const [city, setCity] = React.useState(null) 
  const [error, setError] = React.useState('')
  const [dataDaily, setDataDaily] = React.useState<any>(null)//[Array(), Array(), Array()]
  const [dataPast, setDataPast] = React.useState<any>(null)//(['', 0, ''])
  const [choosenDay, setChoosenDay] = React.useState<any>(null)



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
          console.log('api 1', result.daily) 
        }            
        if (result.current) {
          setDataPast([
            result.current.dt,
            Math.round(result.current.temp),
            result.current.weather[0].icon
          ])
          //setChoosenDay(result.current.dt)  

          console.log('api 2', result.current)        
        }  
      })
  }


  const showDaily = () => {
    if (error || !dataDaily) {
      return  <Empty/> 
    }
    return  <InnerPast dataResult={dataDaily} />
  }

  const showPast = () => {
    if (error || !dataPast) {
      return  <Empty/> 
    }    
    return  <InnerPast dataResult={dataPast} />
  }

  
 

  



  return (
    <div className="page">
 

        <Header />



        <section className="content">        
       
              <PageContext.Provider value={[choosenDay, setChoosenDay]}>

                  <div className="forecast">
                    <CardDaily 
                      title="7 Days Forecast"
                      cities={cities} 
                      apiRequest={apiRequest} 
                      dataDaily={dataDaily}></CardDaily>
                  

                    {showDaily()}

                  </div>

                <div className="forecast forecast-past">
                  <CardPast 
                    title="Forecast for a Date in the Past" 
                    cities={cities}  
                    apiRequest={apiRequest}
                    ></CardPast>
                  
                   
                    {showPast()}

                </div>

             </PageContext.Provider>

         </section>



  
      <Footer />

    </div>
  )
}  

export default App