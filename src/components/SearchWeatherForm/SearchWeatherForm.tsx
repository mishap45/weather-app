import React from 'react'
import style from './searchWeatherForm.module.css'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { SearchOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const validateSchema = Yup.object().shape({
    searchWeather: Yup.string()
        .max(25, 'Too Long City!')
});

type searchWeather = {
    searchWeather: string
}

type SearchWeatherFormTypes = {
    getWeather: (city: string) => void
}

const SearchWeatherForm = ({ history, getWeather }: RouteComponentProps & SearchWeatherFormTypes): JSX.Element => {

    const submit = async (value: searchWeather) => {
        await getWeather(value.searchWeather);
        history.push('/weather');
    };

    return (
        <div className={style.search}>

            <p className={style.head}>Weather App</p>

            <Formik
                initialValues={{searchWeather: ''}}
                validationSchema={validateSchema}
                onSubmit={submit}
            >
                {({errors, touched}) => (
                    <Form className={style.form}>
                        <SearchOutlined className={style.icon} />
                        <Field className={style.input} type="text"
                               name="searchWeather"
                               placeholder={'Enter City'}/>
                        { errors.searchWeather && touched.searchWeather ? (
                            <div style={{ color: '#ff4d4f', fontWeight: 'bold', fontSize: 16 }}>
                                { errors.searchWeather }
                            </div>
                        ) : null }
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default withRouter(SearchWeatherForm)