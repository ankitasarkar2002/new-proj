import React,{useState,useEffect} from 'react'
import Button from './Button'


export default function WeatherInput() {
    const [city,setCity]=useState('');
    const [weather,setWeather]=useState("mumbai");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=412abe098a6b0e84a2d30abf21da7d0c`
            const response= await fetch(url)
            // console.log(response)
            const resJson= await response.json();
            // console.log(resJson)
            setCity(resJson.main)
           


        };
        fetchApi();
        

 },[weather] );
    
      
    const handleOnChange=(event)=>{
        // console.log("on change")
        setWeather(event.target.value);
    };




    return (
            <>
            <div className='container'>
                <form>
                <h1>Weather Report</h1>

                <div className="input-group mb-3 input my-3"  >
                    <input type="text" className="form-control" placeholder="Enter City Here" aria-label="Enter City Here" aria-describedby="button-addon2"
                    onChange={handleOnChange}
                    value={weather}/>
                </div>
                {/* <div className="button">
                    <Button text={"Info"} />
                </div> */}
                </form>

                {!city?(
                    <p>no data fount </p>
                ):(

                    <div className="info my-3">
                    <h1 className='location'>{weather}</h1>
                    <h1 className='temp'>{city.temp}</h1>
                    </div>
                )
                
            
            }


               
                
            

            </div>
        </>
    )
}

