import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProvider from "./providers/UserProvider";
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Search from './pages/Search';
import Profile from './pages/Profile';

const Main = () => {
    return (
        <UserProvider>
            <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/createaccount' element={<CreateAccount />} />
                <Route exact path='/search' element={<Search />} />
                <Route exact path='/profile' element={<Profile />} />
            </Routes>
        </UserProvider>
    );
}

export default Main;