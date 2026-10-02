export class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "open"})
        const style = document.createElement("style");
        this.root.appendChild(style);
        
        async function loadCSS(){
            const req = await fetch('/components/MenuPage.css');
            const css = await req.text();
            style.textContent = css;
        }
        loadCSS();
        
    }
    connectedCallback(){
        const template = document.getElementById("menu-page-template");
        this.content = template.content.cloneNode(true);
        this.root.appendChild(this.content);
    }
    
}
customElements.define("menu-page", MenuPage);