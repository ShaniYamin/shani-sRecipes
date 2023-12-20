import { useEffect, useState } from 'react'
import {auth,provider} from './config'
import {signInWithPopup } from "firebase/auth"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const SignIn = ()=>{
    const [email,setEmail]= useState('')
    const [userName,setUserName]=useState('')
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setEmail(data.user.email);
            setUserName(data.user.displayName)
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
    useEffect(()=>{
        setEmail(localStorage.getItem('email'));
        setUserName(localStorage.getItem('userName'));
    },[])
    return (
        <div>
            {email?
                <NavDropdown title={userName} id="basic-nav-dropdown">
                   <NavDropdown.Item href="user/profile">Profil</NavDropdown.Item>
                   <NavDropdown.Item href="user/recipes">My Recipes</NavDropdown.Item>
                   <NavDropdown.Item href="user/favorite">Saved Recipes</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="/" onClick={handleLogOut}>Log Out</NavDropdown.Item>
                 </NavDropdown>:
                    <button onClick={handleClick}>Sign In</button>}
        </div>
    )
}
export default SignIn;