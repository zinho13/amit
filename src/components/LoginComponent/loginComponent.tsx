import React from "react";

interface Props {
    username : string,
    password : string,
    setUsername : any,
    setPassword : any
    connect : any
}

export const LoginComponent: React.FC<Props> = ({
    username, password, setUsername, setPassword, connect
}) => {
    return(
        <div className="container">
            <div className="form-content">
                <form action="" className="loginForm">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control inputLogin" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"  onChange={(e)=>setPassword(e.target.value)} className="form-control inputLogin" />
                    </div>
                    <button onClick={(e)=>connect(e)} className="btn btn-success d-block">Connexion</button>
                </form>
            </div>
        </div>
    );
}
