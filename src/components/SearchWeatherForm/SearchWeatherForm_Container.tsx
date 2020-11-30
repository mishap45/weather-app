import React from 'react'
import SearchWeatherForm from './SearchWeatherForm'
import { AppStateType } from '../../store/Redux'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getWeather } from '../../store/reducers/WeatherReducer'

type statePropsType = {}

type dispatchPropsType = {
    getWeather: (city: string) => void
}

type ownPropsType = {}

type SearchWeatherForm_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const  SearchWeatherForm_Container:React.FC<SearchWeatherForm_ContainerTypes> = ({ getWeather }) => {

    return <SearchWeatherForm getWeather={getWeather} />
};

const mapStateToProps = (state: AppStateType) => ({});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps,
        { getWeather })
)(SearchWeatherForm_Container)