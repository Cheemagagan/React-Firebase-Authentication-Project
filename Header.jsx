import './Header.css'
import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Outlet,Link } from 'react-router-dom'



const Header = () => {

    return (

        <body>
               <Outlet />

            <header >

                <div class="deakin" ><p >DEV@DEAKIN</p>

                    <div class="s">  <Input icon='search plus' placeholder='Search' />

                    </div>
                    <div className="button">

                        <Button>Post</Button>
                        <Link to= '/login'>
                        <Button >Login</Button>
                        </Link>
                        <Outlet />

                    </div>
                </div>

            </header>
            <br></br>
            <br></br>
           
        </body>)

}


export default Header