import axios from 'axios'

export type WeatherType = {
    weather: [{
        id: number
        main: string
        description: string
        icon: string
    }]

    main: {
        temp: number
        temp_min: number
        temp_max: number
    }

    wind: {
        speed: number
    }

    clouds: {
        all: number
    }

    dt: number

    sys: {
        country: string
        sunrise: number
        sunset: number
    }

    name: string
}

export const weatherAPI = {
    getWeatherAPI(city: string) {
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb516e5fc04e54a205cb177efc9f5fa1`;

        return axios
            .get<WeatherType>(weather)
            .then(response => response.data)
    }
};