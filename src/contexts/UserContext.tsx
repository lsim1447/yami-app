import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DEFAULT_USER_VALUE } from '../components/internal/User';

const initialState = {
    user: DEFAULT_USER_VALUE,
    setUser: (a: any) => {},
}

export const UserContext = React.createContext(initialState);
export const UserContextConsumer = UserContext.Consumer;

export const UserProvider = (props: any) => {
    const USER_ID = '5ecb7b7fa49d6637d033359d';
    const [user, setUser] = useState(DEFAULT_USER_VALUE);

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${USER_ID}`)
            .then(response => {
                setUser(response.data);
            });
    }, []);
    
    return (
        <UserContext.Provider value={{ 
            user: user,
            setUser: setUser
         }}>
            { props.children }
        </UserContext.Provider>
    );
}