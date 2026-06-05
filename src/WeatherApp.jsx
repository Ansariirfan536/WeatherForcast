import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({

        city: "Meerut",
        feelsLike: 36.92,
        humadity: 15,
        temp: 39.07,
        tempMax: 39.07,
        tempMin: 39.07,
        weather: "clear sky",
        windSpeed: 1.16,
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
      
        <div style={{ textAlign: "center" }}><h1 style={{color:"orange", fontFamily:"fantasy"}}> WeatherApp</h1>

            < SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>


    )
}