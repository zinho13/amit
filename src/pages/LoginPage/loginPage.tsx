import axios from "axios";
import { useState } from "react";
import { LoginComponent } from "../../components/LoginComponent/loginComponent";
import { apiUrl } from "../../services/apiUrl";
import api from '../../assets/api.json'

export default function LoginPage() {
    const [username, setUsername] = useState<string | any>('');
    const [password, setPassword] = useState<string | any>('');

    const connect = async (e:any) => {
        e.preventDefault();
        console.log('login');
        axios.post(`${apiUrl}${api.endpoint.authentification.login}`, {
            username: username,
            password: password
        })
        .then(function(res) {
            console.log(res)
            if (res.data.success) {
                localStorage.setItem('token', res.data.token)
            } else {
                console.log(res.data.message)
            }
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <h1 className="login-title">Login page</h1>
            <LoginComponent
            username = {username}
            password = {password}
            setUsername = {setUsername}
            setPassword = {setPassword}
            connect = {connect}
            />

            {/* <h2>{ username }</h2>
            <h2>{ password }</h2> */}
        </div>
    );
}