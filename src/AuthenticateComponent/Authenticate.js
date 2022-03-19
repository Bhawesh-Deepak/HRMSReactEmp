import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

const Authenticate = (props) => {
    const [isLogged, setIsLogged] = useState(props.logName);
    props.setAuth('Invalid');

    const AuthenticateUser = async (values) => {
        console.log(values);
        props.setAuth('');
    }

    return (

        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html">
                    <b style={{ color: "white" }}>KUDU Tech</b>
                </a>
            </div>
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <Formik initialValues={{ userName: '', password: '' }} validationSchema={Yup.object({
                    userName: Yup.string().required('User name is required!'),
                    password: Yup.string().required('Password is required!')
                })} onSubmit={AuthenticateUser}>
                    <Form>
                        <div className="form-group has-feedback">
                            <Field type="text" name="userName" className="form-control" placeholder="Please enter User Name" />
                            <span className="glyphicon glyphicon-users form-control-feedback" />
                            <ErrorMessage name="userName" >
                                {msg => <div style={{ color: 'red', alignContent: 'right' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group has-feedback">
                            <Field
                                type="password" name="password"
                                className="form-control"
                                placeholder="Please enter Password"
                            />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                            <ErrorMessage name="password">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-primary btn-block btn-flat pull-right">
                                    Sign In
                                </button>
                            </div>
                            <div className="col-xs-6">
                                <button type="button" className="btn btn-danger btn-block btn-flat pull-right">
                                    Cancel
                                </button>
                            </div>
                        </div>

                    </Form>
                </Formik>
            </div>
        </div >
    );
}

export default Authenticate;
