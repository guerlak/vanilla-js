import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';

// LInk my Web Components
import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';

window.app = {MenuPage, OrderPage, DetailsPage}
app.store = Store;
app.router = Router;


// Its Better to wait for the DOM to load before executing scripts 
window.addEventListener("DOMContentLoaded", async function () {
    app.store.menu = await API.fetchMenu();
    //console.log("Menu", app.store.menu);
    app.router.init(); 

});