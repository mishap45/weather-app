import { AppStateType } from '../Redux'

export const getWeatherCity = (state: AppStateType) => {
    return state.weatherReducer.weather
};