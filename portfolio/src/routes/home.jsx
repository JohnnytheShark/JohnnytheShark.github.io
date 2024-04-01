import Table from '../components/Table/Table';
import data from '../data/Scripts.json';
const Home = () => {
    return (<div className="Container">
            <main>
                <figure>
                    <picture>
                        <img src="./mountains.jpg" alt="snowy mountain range"/>
                    </picture>
                </figure>
                <h1>Stop Wasting Time Searching: Hire a Results-Oriented Engineer Today</h1>
                <h2>I solve complex problems with elegant code. Let&apos;s discuss how I can elevate your engineering team.</h2>
           </main>
           <article className="calltoAction">
            <h3>Jonathan Orellana: Building Exceptional Software Solutions</h3>
            <figure>
                <picture>
                    <img src="./Portrait.jpg" alt="portfolio Image"/>
                </picture>
            </figure>
            <a role="button" className="Invite Bounce" href="mailto:orellanajonathan7@gmail.com" rel="noopener noreferrer" target="_blank" >Let&apos;s build something amazing together!</a>
           </article>
           <article className="accomplishments">
            <span>
            <h1>Expertise in Action:</h1>
            <ul>
                <li>Empowered accounting department with automation: Freed up 100+ hours/month by scripting daily tasks with PowerShell, Python, & SQL, enabling them to focus on high-impact strategic work.</li>
                <li>Modernized legacy applications: Transformed outdated .asp sites into accessible, user-friendly .NET & React web apps, boosting productivity across the board.</li>
                <li>Streamlined SOX reporting: Automated data entry, report generation, and verification using RPA bots. Saved 100 hours/month, freeing up employees for higher-value tasks. Managed project end-to-end.</li>
                <li>Data-driven decision making: Leveraged PowerApps surveys on SharePoint to deliver actionable insights, empowering departments with data-backed strategies.</li>
                <li>Streamlined revenue accounting operations by 3 positions through the use of Spotfire dashboard technology and Alteryx, resulting in efficiency and saving the company $150,000 annually.</li>
                <li>Developed and implemented an Alteryx and Python application that matched payments, resulting in the processing of an average of $15M daily.</li>
            </ul></span>
            <figure>
                    <picture>
                        <img src="./coffee.jpg" alt="snowy mountain range"/>
                    </picture>
                </figure>
           </article>
           <article className="solutions">
            <h1>Solutions:</h1>
            <p>I&apos;m a big believer in open source solutions and building in house solutions.</p>
            <p>Below you will find some scripts/repositories that I have created (click on any table row it will direct you to the site or repository):</p>
            <Table arialabel={"Scripts Built by Jonathan"} caption="Scripts" data={data}/>
           </article>
           <aside className="currentStatus">
            <h1>Elevating My Tech Leadership</h1><br/>
            <p>I&apos;m actively broadening my horizons as a developer and leader, sharpening my algorithmic problem-solving acumen, and delving into the Rust Programming Language to forge new paths in efficient and safe code design.</p><br/><br/>
            <a role="button" className="Invite Bounce" href="/Updated Resume (1).pdf" download="Resume.pdf">Download my Resume</a>
           </aside>
           </div>
    );
}

export default Home;
