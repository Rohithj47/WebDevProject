import React, { useState } from 'react';
import { loginThunk } from '../services/auth-thunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser, loading, error } = useSelector((state) => state.user);
    console.log(currentUser)
    const handleSubmit = async () => {
        await dispatch(loginThunk({ email, password }))
        if (!error) {
            navigate('/')
        }
    }
    return (
        <div>
            <form className="row g-3">
                <div className="col-auto">
                    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="staticEmail2" 
                        placeholder="Email"
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="inputPassword2" 
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>
                <div className="col-auto">
                    <button 
                        className="btn btn-primary mb-3"
                        onClick={handleSubmit}  
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
                {error && <div>{error}</div>}
            </form>        
        </div>
    );
}

export default Login;