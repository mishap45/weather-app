import React from 'react'
import style from './searchWeatherForm.module.css'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { SearchOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const validateSchema = Yup.object().shape({
    searchText: Yup.string()
        .max(25, 'Too Long City!')
});

type searchWeather = {
    searchText: string
}

const SearchWeatherForm = ({ history }: RouteComponentProps): JSX.Element => {

    const submit = (value: searchWeather) => {
        alert(value.searchText);
        value.searchText = '';
        history.push('weather')
    };

    return (
        <div className={style.search}>

            <p className={style.head}>Weather App</p>

            <Formik
                initialValues={{searchText: ''}}
                validationSchema={validateSchema}
                onSubmit={submit}
            >
                {({errors, touched}) => (
                    <Form className={style.form}>
                        <SearchOutlined className={style.icon} />
                        <Field className={style.input} type="text"
                               name="searchText"
                               placeholder={'Enter City'}/>
                        { errors.searchText && touched.searchText ? (
                            <div style={{ color: '#ff4d4f', fontWeight: 'bold', fontSize: 16 }}>
                                { errors.searchText }
                            </div>
                        ) : null }
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default withRouter(SearchWeatherForm)