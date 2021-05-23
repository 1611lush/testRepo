import * as React from 'react';



const Empty = () => (
	<div className="forecast__result forecast__result_empty">
          <img src="./images/bg160.svg" alt="empty" className="forecast__img " />
          <span className="forecast__text">Fill in all the fields and the weather will be displayed</span>
        </div>  
)



export default Empty