import React from 'react';
import Navigation from '../UI/Navigation/Navigation';
import Footer from '../UI/Footer/Footer';
import styles from './Layout.module.scss';

/**
 * Layout Component is a HOC (Higher Order Component) that takes in all elements and displays the Navigation Bar at the top of the application.
 */

 const Layout = props => <div className={styles.Layout}><Navigation/>{props.children}<Footer/></div>

 export default Layout;