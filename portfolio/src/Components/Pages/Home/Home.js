import React,{useState} from 'react';
import styles from './Home.module.scss'
import portrait from '../../../assets/Portrait.jpg'
import Ammortization from '../../Ammortization/Ammortization';
import PowerShell from '../../PowerShell/PowerShell';
import Python from '../../Python/Python';
import JavaScript from '../../JavaScript/JavaScript';
import SQL from '../../SQL/SQL';
import thankyou from '../../../assets/ThankYou.m4a';
// import sqlCertificate from '../../../assets/UC-Q0KY665M.pdf'
/**
 * Home Page
 * @returns Home Page Component for introductions 
 */
const Home = ()=>{
    const [PortfolioType,updatePortfolioType] = useState("");
    return (
        <div className={styles.body}>
            <main>
            <img src={portrait} className={styles.images} alt="profileimage"/>
            <div className={styles.des}>
            <h4>Hi, my name is</h4>
            <h1>Jonathan Orellana.</h1>
            <h2>I use technology to help businesses improve their efficiency and productivity.</h2>
            <p>As a skilled software engineer, I have a proven track record of successfully automating business processes, reducing manual labor, and modernizing older websites to improve the productivity of business teams.</p>
            <audio controls autoPlay>
                <source src={thankyou} controls />
            </audio>
            </div>
           </main>
            <article id="About">
            <h2>About Me</h2>
            <p>I am a passionate software developer who is driven to create excellent software and solutions that improve the lives of those around me. I have a strong understanding of both front-end and back-end development, and I am proficient in a variety of programming languages and technologies. If you have a problem that you want my help resolving or possibly want me working with your team, please feel free to reach out. I will try my best to get back to you as soon as possible. I look forward to hearing from you. </p>
            <a className={`${styles.smallLink} ${styles.bounce}`} href="mailto:orellanajonathan7@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </article>
            <article id={`${styles.Portfolio}`}>
            <h2 id="Portfolio">Portfolio:</h2>
            <div className={styles.Options}>
            <button onClick={()=>updatePortfolioType("Ammortization")}>Ammortization Schedule Application</button>
            <button  onClick={()=>updatePortfolioType("PowerShell")}>Powershell Optimization Scripts</button>
            <button  onClick={()=>updatePortfolioType("Python")}>Python Scripts</button>
            <button onClick={()=>updatePortfolioType("SQL")}>SQL Scripts</button>
            <button  onClick={()=>updatePortfolioType("JavaScript")}>JavaScript Scripts</button>
            </div>
            {PortfolioType === "Ammortization" ? <section><Ammortization/></section>: PortfolioType === "PowerShell" ? <section><PowerShell/></section>: PortfolioType === "Python" ? <section><Python/></section>:PortfolioType === "SQL" ? <section><SQL/></section>: PortfolioType === "JavaScript" ? <section><JavaScript/></section> : ""}
            </article>
            {/* <article h2="Accomplishments">
            <h2>Certificates</h2>
            <a href={sqlCertificate} download>SQL Online Course</a>
            </article> */}
        </div>
    )
}

export default Home;