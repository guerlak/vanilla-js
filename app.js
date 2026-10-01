import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';

window.app = {}
app.store = Store;
app.router = Router;


// Its Better to wait for the DOM to load before executing scripts 
window.addEventListener("DOMContentLoaded", async function () {
    app.store.menu = await API.fetchMenu();
    console.log("Menu", app.store.menu);
    app.router.init(); 

});

const $ = function (args) { return document.querySelector(args); }
const $$ = function (args) { return document.querySelectorAll(args); }

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }
