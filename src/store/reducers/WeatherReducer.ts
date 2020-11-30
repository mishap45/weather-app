import { AppStateType, InferActionsTypes } from '../Redux'
import { ThunkAction } from 'redux-thunk'
import { weatherAPI } from '../../API/API'

export type weatherType = {
    city: string
    country: string
    date: number
    icon: string
    description: string
    temp: number
    sunset: number
    sunrise: number
    wind: number
    highestTemp: number
    lowestTemp: number
    clouds: number
    main: string
}

export type initialStateType = {
    weather: Array<weatherType>
}

let initialState: initialStateType = {
    weather: [
        { city: 'gg', country: 'gg', date: 11, icon: 'ss', description: 'dd', temp: 22, sunrise: 22, sunset: 22, wind: 44,
            highestTemp: 33, lowestTemp: 11, clouds: 22, main: 'gg' }
    ]
};

const WeatherReducer = (state = initialState, action: ActionsTypesWeather): initialStateType => {
    switch (action.type) {
        case 'SET_WEATHER': {
            return {
                ...state,
                weather: [{
                    city: action.city,
                    country: action.country,
                    date: action.date,
                    icon: action.icon,
                    description: action.description,
                    temp: action.temp,
                    sunset: action.sunset,
                    sunrise: action.sunrise,
                    wind: action.wind,
                    highestTemp: action.highestTemp,
                    lowestTemp: action.lowestTemp,
                    clouds: action.clouds,
                    main: action.main
                }]
            }
        }

        default:
            return state
    }
};

//AC
type ActionsTypesWeather = InferActionsTypes<typeof actionsWeather>

export const actionsWeather = {
    setWeather: (
        city: string,
        country: string,
        date: number,
        icon: string,
        description: string,
        temp: number,
        sunset: number,
        sunrise: number,
        wind: number,
        highestTemp: number,
        lowestTemp: number,
        clouds: number,
        main: string
    ) =>
        ({
            type: 'SET_WEATHER',
            city, country, date, icon, description, temp, sunset, sunrise, wind, highestTemp, lowestTemp, clouds, main
        } as const)
};

//Thunks
type ThunkWeatherType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypesWeather>

export const getWeather = (city: string): ThunkWeatherType => {

    return async (dispatch) => {
        let response = await weatherAPI.getWeatherAPI(city);

        dispatch(actionsWeather.setWeather(response.name, response.sys.country, response.dt, response.weather[0].icon,
            response.weather[0].description, response.main.temp, response.sys.sunset, response.sys.sunrise, response.wind.speed,
            response.main.temp_max, response.main.temp_min, response.clouds.all, response.weather[0].main))
    }
};

export default WeatherReducer