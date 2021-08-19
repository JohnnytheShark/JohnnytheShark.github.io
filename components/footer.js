class Footer extends HTMLElement { 
    constructor (){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer>
        <ul>
        <li><div class="social-media-icon"><a href="https://www.instagram.com/thecyberyak" target="_blank"><img src="assets/images/Instagram.png" width="30vh"></a></div></li>
        <li><div class="social-media-icon"><a href="https://www.twitter.com/realcyberyak" target="_blank"><img src="assets/images/Twitter.png" width="30vh"></a></div></li>
        <li><div class="social-media-icon"><a href="https://github.com/JohnnytheShark" target="_blank"><img src="assets/images/Github.png" width="30vh"></a></div></li>
        </ul>
        </footer>
        `;
    }
}

export default Footer;