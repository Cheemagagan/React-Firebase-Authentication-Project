import React from 'react'
import { useState } from "react"
import { Button, Form, Icon } from 'semantic-ui-react'
import './Login.css'
import { Link } from 'react-router-dom'
import Image from './Image'
import { signinAuthUserWithEmailAndPassword } from "./Auth/Firebase";


function Login() {

    const [contact, setcontact] = useState({
        email: '',
        password: ''
    })
    const [loggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');


    const { email, password } = contact
    console.log(contact)
    async function handleClick() {

        try {
            const response = await signinAuthUserWithEmailAndPassword(email, password)
            setLoggedIn(true);
            setUserEmail(response.user.email);
            setError('');
        }
        catch (error) {
            console.log('error in login', error.message)
            alert('Account does not exist')
        }

    }

    function handlepass(event) {
        const value = event.target.value
        const name = event.target.name

        setcontact((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })

    }
    return (



        <div>
            <div className="b2">
                <Link to='/header'>
                    <Button animated size=''>
                        <Button.Content visible>Back</Button.Content>
                        <Button.Content hidden>
                            <Icon name='backward' />
                        </Button.Content>
                    </Button>
                </Link>
            </div>
            <div className="all">
            <div className="container">
                <Form>
                    <Link to='/signup'>
                        <div className="signUP">
                            <Button circular color='black' icon='signup' />
                        </div>
                    </Link>
                    <Form.Group   >
                        <div className="email">
                            <div className="email_label">
                                <label>Your Email</label>
                            </div>
                            <div className="email_input">
                                <input name='email'
                                    type='email'
                                    placeholder='email' onChange={handlepass} />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div className="email">
                            <div className="email_label">
                                <label>Password</label>
                            </div>
                            <div className="password_input">
                                <input name='password'
                                    type='password'
                                    placeholder='password' onChange={handlepass} />
                            </div>
                        </div>
                    </Form.Group>
                    <div className="checkbox">
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                    </div>
                    <br></br>
                    <div className="l">
                        <Button onClick={handleClick} type='submit'>Login</Button>
                    </div>
                    {loggedIn && (
                        <div>
                            <h3>User: {userEmail}</h3>
                        </div>
                    )}
                    <br></br>

                </Form>

            </div>
            <br></br>
            </div>

        </div>

    )
}

export default Login