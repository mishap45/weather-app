import React from 'react'
import style from './main.module.css'
import SearchWeatherForm from '../SearchWeatherForm/SearchWeatherForm'
import WeatherPage from '../WeatherPage/WeatherPage'
import { Switch, Route, Redirect } from 'react-router-dom'

const ErrorPage = () => {
    return <div>error</div>;
};

const Main = () => {
    return (
        <div className={style.main}>
            <Switch>
                <Route exact path={"/search"} component={SearchWeatherForm} />
                <Route exact path={"/weather"} component={WeatherPage} />
                <Route exact path='/' render={() => <Redirect to={"/search"} />}/>
                <Route path='*' component={ErrorPage}/>
            </Switch>
        </div>
    )
};

export default Main