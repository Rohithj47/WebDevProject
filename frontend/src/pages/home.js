import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk } from '../services/auth-thunk';
import { Link } from 'react-router-dom'

function Home(props) {
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [user, setUser] = useState(currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchUser() {
            try {
                const { payload } = await dispatch(getUserThunk())
                setUser(payload) 
            } catch(err) {
                console.log("User not logged in yet")
            }
        }
        fetchUser() 
    }, [])

    return (
        <div>
            <h1>You are on Home screen</h1>
            {console.log(user)}
            {user?  user.email
                :   <Link to="/login">Login</Link>
            }
            
        </div>
    );
}

export default Home;