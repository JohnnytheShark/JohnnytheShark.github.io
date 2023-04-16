import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss';
import logo from '../../../assets/LogoforWeb.svg'
import Resume from '../../../assets/Resume-1.pdf';

/**
 * Navigation at the top shown on the homepage. 
 * @returns Navigation component for the users to use.
 */
const Navigation = ()=>{
    return(
    <nav className={styles.Navigation}>
    <img src={logo} className={styles.images} alt="Logo"/>
    <NavLink to="/">Home</NavLink>
    <a href="#About">About</a>
    <a href="#Portfolio">Portfolio</a>
    <a href={Resume} download>Resume</a>
    <a href="https://github.com/JohnnytheShark">Github</a>
    </nav>)
}

export default Navigation;