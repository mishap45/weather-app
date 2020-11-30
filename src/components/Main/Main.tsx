import React from 'react'
import style from './main.module.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import SearchWeatherForm_Container from '../SearchWeatherForm/SearchWeatherForm_Container'
import WeatherPage_Container from '../WeatherPage/WeatherPage_Container'

const ErrorPage = () => {
    return <div>error</div>;
};

const Main = () => {
    return (
        <div className={style.main}>
            <Switch>
                <Route exact path={"/search"} component={SearchWeatherForm_Container} />
                <Route exact path={"/weather"} component={WeatherPage_Container} />
                <Route exact path='/' render={() => <Redirect to={"/search"} />}/>
                <Route path='*' component={ErrorPage}/>
            </Switch>
        </div>
    )
};

export default Main