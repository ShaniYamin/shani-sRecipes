import { useEffect, useState } from 'react'
import {auth,provider} from './config'
import {signInWithPopup } from "firebase/auth"
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';

const SignIn = ()=>{
    const [email,setEmail]= useState('')
    const [userName,setUserName]=useState('')

    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setEmail(data.user.email);
            setUserName(data.user.displayName)
            localStorage.setItem('email',data.user.email)
            localStorage.setItem('userName',data.user.displayName)
            localStorage.getItem('email');
            localStorage.getItem('userName');
        }).catch((error)=>{
            console.log(error);
        }) 
    }
    const handleLogOut= ()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            {email? <NavDropdown title={userName} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/user/profile">Profil</NavDropdown.Item>
                        <NavDropdown.Item href="/user/recipes">My Recipes</NavDropdown.Item>
                        <NavDropdown.Item href="/user/favorite">Saved Recipes</NavDropdown.Item>
                        <NavDropdown.Item href="recipes/create">Create New Recipe</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={handleLogOut}>Log Out</NavDropdown.Item>
                        </NavDropdown>:
                    <button onClick={handleClick}>Sign In</button>}
        </div>
    )
}
export default SignIn;