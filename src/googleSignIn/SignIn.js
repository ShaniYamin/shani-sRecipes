import {  useState } from 'react'
import {auth,provider} from './config'
import {signInWithPopup } from "firebase/auth"
import NavDropdown from 'react-bootstrap/NavDropdown';
// import axios from 'axios';

const SignIn = ({setisUserSignIn})=>{
    const [email,setEmail]= useState('')
    const [userName,setUserName]=useState('')

    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setEmail(data.user.email);
            setUserName(data.user.displayName)
            setisUserSignIn(true)
            localStorage.setItem('email',data.user.email)
            localStorage.setItem('userName',data.user.displayName)
        }).catch((error)=>{
            console.log(error);
        }) 
    }

    return (
        <div>
            <button onClick={handleClick}>Sign In</button>
        </div>
    )
}
export default SignIn;