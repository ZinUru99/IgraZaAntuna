import React from 'react'
 
const Result = ({ term , secretNum }) => {
  let result;
  if(term){
    if(secretNum > term){
      result = 'PROBAJ VIŠE!'
    }
    else if(secretNum < term){
      result ='PROBAJ NIŽE!'
    }
    else{
      result ='Yippee, pogodili ste broj!'
    
    }
  }
  return <h3 className='result'>{result}</h3>
}
 
export default Result