import React, { useState } from 'react'
import WeatherPage from './WeatherPage'
import { weatherType } from '../../store/reducers/WeatherReducer'
import { AppStateType } from '../../store/Redux'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getWeatherCity } from '../../store/selectors/WeatherSelector'
import { Redirect } from 'react-router'

type statePropsType = {
    weather: Array<weatherType>
}

type dispatchPropsType = {}

type ownPropsType = {}

type WeatherPage_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const WeatherPage_Container:React.FC<WeatherPage_ContainerTypes> = ({ weather }) => {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [img, setImg] = useState('');

    return weather[0].city === 'gg'
        ? <Redirect to={'/search'} />
        : <WeatherPage weather={weather} days={days} months={months} img={img} setImg={setImg} />
};

const mapStateToProps = (state: AppStateType) => ({
    weather: getWeatherCity(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {})
)(WeatherPage_Container)