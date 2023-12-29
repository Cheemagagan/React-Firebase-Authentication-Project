import React from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'
import './Signup.css'
import Image from './Image'
import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from "./Auth/Firebase";
import { Link } from 'react-router-dom'


function Signup() {
    const [contact, setcontact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }
    const { displayName, email, password, confirmPassword } = contact
    console.log(contact)
    async function handleClick() {
        if (!isChecked) {
            alert('Please agree to the Terms and Conditions');
            return;
        }
        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }
        

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createuserdocfromAuth(user, { displayName })

            console.log(user)
            return;
        }
        catch (error) {
            console.log('error in creation', error.message)
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
    return (<body>

  
        <div className="b3">
                <Link to='/login'>
                    <Button animated size=''>
                        <Button.Content visible>Back</Button.Content>
                        <Button.Content hidden>
                            <Icon name='backward' />
                        </Button.Content>
                    </Button>
                </Link>
            </div>
        <div className='all'>
            
            <div className="container2">
                <div className="title">
                    <h3> Create a DEV@DEAKIN Account</h3>
                </div>
                <Form>
                    <Form.Group   >
                        <div className="n">
                            <div className="N_label">
                                <label >Name</label >
                            </div>
                            <div className="name_input">
                                <input name='displayName' type='text'
                                    placeholder='name' onChange={handlepass} />

                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group >
                        <div className="n">
                            <div className="N_label">
                                <label >Email</label >
                            </div>
                            <div className="E_input">
                                <input name='email'
                                    type='email'
                                    placeholder='email' onChange={handlepass} />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group >
                        <div className="n">
                            <div className="N_label">
                                <label >Password</label >
                            </div>
                            <div className="p_input">
                                <input name='password'
                                    type='password'
                                    placeholder='password' onChange={handlepass} />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group >
                        <div className="n">
                            <div className="N_label">
                                <label >Confirm Password</label >
                            </div>
                            <div className="c_p_input">
                                <input name='confirmPassword'
                                    type='password'
                                    placeholder='confirmPassword' onChange={handlepass} />
                            </div>
                        </div>
                    </Form.Group>

                    <div className="checkbox">
                        <Form.Checkbox label='I agree to the Terms and Conditions'
                            checked={isChecked} onChange={handleCheckboxChange} />
                    </div>
                    <br></br>
                    <Link to='/login'>
                        <div className="l">
                            <Button onClick={handleClick} >Create</Button>
                        </div>
                    </Link>
                    <br></br>
                </Form>

            </div>

        </div>
        </body>
    )
}

export default Signup