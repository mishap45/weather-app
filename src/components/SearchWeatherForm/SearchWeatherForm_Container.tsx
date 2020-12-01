import React, {useEffect} from 'react'
import SearchWeatherForm from './SearchWeatherForm'
import { AppStateType } from '../../store/Redux'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getWeather } from '../../store/reducers/WeatherReducer'
import axios from "axios";

type statePropsType = {}

type dispatchPropsType = {
    getWeather: (city: string) => void
}

type ownPropsType = {}

type SearchWeatherForm_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const  SearchWeatherForm_Container:React.FC<SearchWeatherForm_ContainerTypes> = ({ getWeather }) => {

    useEffect(() => {
        (async function gg() {
            await axios.get('http://api.weatherapi.com/v1/current.json?key=9841bcd959ce4ccdb25121321200112&q=London')
                .then(response => {
                    alert('api data: ' + JSON.stringify(response.data));
                    debugger
                    return response.data
                });
        })()
    });

    return <SearchWeatherForm getWeather={getWeather} />
};

const mapStateToProps = (state: AppStateType) => ({});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps,
        { getWeather })
)(SearchWeatherForm_Container)