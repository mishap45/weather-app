import React from 'react'
import style from './weatherPage.module.css'
import Cloud from '../../assets/icons/cloud.svg'

const WeatherPage = () => {
    return (
        <div className={style.weather}>

            <div className={style.weatherApp}>
                <p>Weather App</p>
            </div>

            <div className={style.weatherWrapper}>
                <div>
                    <p className={style.cityName}>Ternopil, UA</p>
                    <p className={style.day}>Monday 30 November</p>
                </div>

                <div className={style.weatherBlock}>
                    <div className={style.weatherImgBlock}>
                        <div>
                            <img src={Cloud} alt="weatherImg" className={style.weatherImg} />
                        </div>

                        <div>
                            <p className={style.degrees}>2°</p>
                            <p className={style.degreesText}>Overcast clouds</p>
                        </div>
                    </div>

                    <div className={style.weatherTableBlock}>
                        <p>2°<br/>Hight</p>
                        <p>1.34mph<br/>Wind</p>
                        <p>07:51<br/>Sunrise</p>
                        <p>2°<br/>Low</p>
                        <p>88%<br/>Rain</p>
                        <p>16:21<br/>Sunset</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeatherPage