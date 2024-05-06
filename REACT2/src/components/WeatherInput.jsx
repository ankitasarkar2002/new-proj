import React,{useEffect, useState} from 'react'


export default function WeatherInput() {
    const[city,setCity]=useState("pune");
    const [weather,setWeather]=useState('');


    useEffect(()=>{

        const fetchApi= async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=412abe098a6b0e84a2d30abf21da7d0c`
           const response = await fetch(url);
        //    console.log(response)
           const resJson= await response.json();
        //    console.log(resJson)
           setWeather(resJson.main)

        };
        fetchApi();
    },[city]);
   
    
      
    const handleOnChange=(event)=>{
        
    setCity(event.target.value)
    };




    return (
            <>
            <div className='container'>
                <form>
                <h1>Weather Report</h1>

                <div className="input-group mb-3 input my-3"  >
                    <input type="text" className="form-control" placeholder="Enter City Here" aria-label="Enter City Here" aria-describedby="button-addon2"
                    onChange={handleOnChange}
                    value={city}
                    />
                </div>
                
                </form>

                {!weather?(
                    <p>no data found </p>
                ):(

                    <div className="info my-3">
                    <h1 className='location'><b>{city}</b></h1>
                    <h3 className='temp '>Temperature : {weather.temp}</h3>
                
                    <h5 className='maxTemp'>Maximum Temp : {weather.temp_max}</h5>
                    <h5 className='minTemp'>Minimum Temp :  {weather.temp_min}</h5>

                    </div>
                 )}
                
            
            </div>
        </>
    )
}

