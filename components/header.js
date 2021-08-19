class Header extends HTMLElement { 
    constructor (){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
        <nav>
        <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/projects.html">PROJECTS</a></li>
        <li><a href="/documents.html">DOCUMENTS</a></li>
        </ul>
        </nav>
        </header>
        `;
    }
}

export default Header;
// export default customElements.define('header-component',Header);