import Table from '../components/Table/Table';
import data from '../data/Scripts.json';
import styles from '../styles/Home.module.scss';

const NewHome = () => {
    return (<div className="Large-Container">
            <div className={styles.Card}>
            <figure className={styles.portfolioImage}>
                <picture>
                    <img src="./Portrait.jpg" alt="portfolio Image"/>
                </picture>
            </figure>
                <div>
                    <h1>Jonathan Orellana</h1>
                    <h3>Software Engineer | Data Analyst | Agile Enthusiast</h3>
                    <p>I leverage my development skills and business understanding to design, build, and implement solutions that streamline workflows and deliver
                        user-centric applications.
                    </p>
                </div>
            </div>
            <div className={styles.Card}>
                <ul title="Accomplishments">
                    <li>
                        Developed and deployed an automated ETL process using Alteryx and Python to extract, clean,
                        transform, and load remit data (15 million daily) from various sources (PDFs, emails, text documents,
                        CSV files) into Teradata for matching with invoices in DB2 SQL tables, enabling the IT department to
                        automate payment application (every two hours).
                    </li><br/>
                    <li>
                        Rebuilt and modernized critical internal applications (time clock, ticketing system, check inventory, security
                        console) using a full-stack approach (ASP.Net, MS SQL, React) to enhance functionality, streamline workflows,
                        and improve user experience for various departments (Payroll, Miscellaneous Billing, System Administration).
                    </li><br/>
                    <li>
                        Automated quarterly SOX lease accounting survey using Microsoft PowerApps and SharePoint. Increased
                        efficiency by eliminating manual form rebuilding and streamlining data collection and distribution.
                    </li><br/>
                </ul>
            </div>
            <div className={styles.Card2}>
                <h2>Projects and Repositories</h2>
                <p>Click on any entry the table below to see the repository or project</p>
            <Table arialabel={"Scripts Built by Jonathan"} caption="Scripts" data={data}/></div>
            <div className={styles.Card2}>
                <h2>Contact</h2>
                <a role="button" className={`${styles.Invite} ${styles.Bounce}`} href="mailto:orellanajonathan7@gmail.com" rel="noopener noreferrer" target="_blank" >Let&apos;s build something amazing together!</a>
                <a role="button" className={`${styles.Invite} ${styles.Bounce}`} href="/Updated Resume (2).pdf" download="Resume.pdf">Need a copy of my resume?</a>
            </div>
                

           </div>
    );
}

export default NewHome;
