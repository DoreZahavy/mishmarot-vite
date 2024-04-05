import React from 'react'

import { NavLink } from "react-router-dom";

export default function MainHeader() {


    return (
        <header className='main-header main-layout full'>
            <section className='nav-container flex space-between align-center'>

                <NavLink to="/">
                    <div className="logo">Mishmarot</div>
                </NavLink>
                <nav className="main-nav">
                    <ul className='clean-list flex align-center'>
                        <li><NavLink to='/editor' >Editor</NavLink></li>
                        <li><NavLink to='/submission' >Sunmission</NavLink></li>
                        <li><NavLink to='/account' >Account</NavLink></li>
                        <li><NavLink to='/signin' >SignIn</NavLink></li>
                    </ul>
                </nav>
            </section>

        </header>
    );
}