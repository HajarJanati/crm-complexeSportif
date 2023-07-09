import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from "axios";
import {navigate} from "react-big-calendar/lib/utils/constants";
import {Navigate} from "react-router-dom";
import {UserContext} from "../../userContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect]= useState(false);
    const {setUser}=useContext(UserContext);
    async function loginUser(event) {
        try{
            event.preventDefault();
            const {data}= await axios.post('/users/login', {email, password})
            setUser(data);
            setRedirect(true)
            }
        catch (e) {
            toast.error('login failed');        }

    }
    if(redirect){
        return <Navigate to={'/dashbord'}/>
    }


    return (
        <Container fluid className="p-0 m-0">
            <ToastContainer />
            <Row className="m-0">
                <Col xs={12} md={8} className="p-0">
                    <div className="h-100 position-relative">
                        <img
                            src="/img/single-image.jpg"
                            className="w-100 h-100  top-0 start-0"/>
                    </div>
                </Col>
                <Col xs={11} md={4} className="pt-5">
                    <div className='pt-5 mt-5 px-5 mx-5 '>
                        <img src="https://kooraland.chimatchapp.com/img/logo-light.png"
                             className="w-50 h-50 pt-4 mx-2"/>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-100 px-5'>
                        <p class=" px-3 mx-5  mt-3  mb-5 !font-light text-gray-600">Bienvenue sur votre compte</p>
                        <Form onSubmit={loginUser}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                       placeholder="name@example.com" value={email} onChange={(event) => {
                                    setEmail(event.target.value);
                                }}/>
                                <label htmlFor="floatingInput">Email </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password" value={password} onChange={(event) => {
                                    setPassword(event.target.value);
                                }}/>
                                <label htmlFor="floatingPassword">Mot de passe </label>
                            </div>
                            <p class="small  mb-1 text-end "><a href="/forgetPassword">Mot de passe oubliée ?</a></p>

                            < Button  type="submit" className=" mx-4 mt-4 rounded-pill btn btn-success"
                                      size='sm'>Se connecter </ Button>
                        </Form>

                    </div>
                </Col>
            </Row>
        </Container>
    );

}
export default LoginPage;
