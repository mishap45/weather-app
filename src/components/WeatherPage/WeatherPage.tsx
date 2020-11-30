import React, {useState} from 'react'
import style from './weatherPage.module.css'
import Clouds from '../../assets/icons/weather/clouds.svg'
import Drizzle from '../../assets/icons/weather/drizzle.svg'
import Rain from '../../assets/icons/weather/rain.svg'
import Snow from '../../assets/icons/weather/snow.svg'
import Sun from '../../assets/icons/weather/sun.svg'
import Thunderstorm from '../../assets/icons/weather/thunderstorm.svg'
import { weatherType } from '../../store/reducers/WeatherReducer'

type WeatherPageTypes = {
    weather: Array<weatherType>
    months: Array<string>
    days: Array<string>
    img: string

    setImg: (img: string) => void
}

const WeatherPage:React.FC<WeatherPageTypes> = ({ weather, days, months, setImg, img }) => {

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
        }`;

    const sunset = new Date(weather[0].sunset * 1000).toLocaleTimeString().slice(0, 5);
    const sunrise = new Date(weather[0].sunrise * 1000).toLocaleTimeString().slice(0, 5);

    return (
        <div className={style.weather}>

            <div className={style.weatherApp}>
                <p>Weather App</p>
            </div>

            <div className={style.weatherWrapper}>
                <div>
                    <p className={style.cityName}>{weather[0].city}, {weather[0].country}</p>
                    <p className={style.day}>{date}</p>
                </div>

                <div className={style.weatherBlock}>
                    <div className={style.weatherImgBlock}>
                        <div>
                            {
                                weather[0].main === 'Thunderstorm' ? setImg(Thunderstorm)
                                    : weather[0].main === 'Drizzle' ? setImg(Drizzle)
                                    : weather[0].main === 'Rain' ? setImg(Rain)
                                    : weather[0].main === 'Snow' ? setImg(Snow)
                                    : weather[0].main === 'Clear' ? setImg(Sun)
                                    : weather[0].main === 'Clouds' ? setImg(Clouds) : setImg(Clouds)
                            }
                            <img src={img} alt="weatherImg" className={style.weatherImg} />
                        </div>

                        <div>
                            <p className={style.degrees}>{Math.floor(weather[0].temp - 273.15)}°</p>
                            <p className={style.degreesText}>{weather[0].description}</p>
                        </div>
                    </div>

                    <div className={style.weatherTableBlock}>
                        <p>{Math.floor(weather[0].highestTemp - 273.15)}°<br/>Hight</p>
                        <p>{weather[0].wind}mph<br/>Wind</p>
                        <p>{sunrise}<br/>Sunrise</p>
                        <p>{Math.floor(weather[0].lowestTemp - 273.15)}°<br/>Low</p>
                        <p>{weather[0].clouds}%<br/>Rain</p>
                        <p>{sunset}<br/>Sunset</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeatherPage