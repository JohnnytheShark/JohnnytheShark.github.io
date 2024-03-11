import styles from '../../styles/Navigation.module.scss';
import {NavLink} from "react-router-dom";
import {useState} from 'react';

const Navigation =()=>{
    const [isToggled,toggleActive] = useState(false);


    return <nav className={`${styles.nav}`} aria-labelledby="mainmenu">

        <ul className={`${styles.navMenu} ${isToggled ? styles.active : ""}`}>
            <li><NavLink tabIndex="0" className={({isActive})=> isActive ? styles.on : undefined} to={"/About"}>About</NavLink></li>
            <li><NavLink tabIndex="0" className={({isActive})=> isActive ? styles.on : undefined} to={"/"} end>Home</NavLink></li>
        </ul>
        <div tabIndex="0" aria-label="Hamburger-Button" role="button" label="hamburgerButton" className={`${styles.Hamburger}  ${isToggled ? styles.active : ""}`} onClick={()=>toggleActive(!isToggled)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>

    </nav>
}

export default Navigation;