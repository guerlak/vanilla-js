const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                Router.go(event.target.getAttribute("href"));
            });
        });
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        });
        console.log(location.pathname)
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log("Going to: ", route, addToHistory);
        if(addToHistory) {
            history.pushState({route}, null, route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page");
              
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;
            default:
               if(route.startsWith("/product/")) {
                   pageElement = document.createElement("details-page");
                   const id = route.split("/")[2];
                   pageElement.dataset.id = id;
                   pageElement.textContent = "Produto ID: " + id
                   
               }else{
                pageElement = document.createElement("h1");
                pageElement.textContent = "Not Found";
               }
                break;
        }

        if (pageElement) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(pageElement);
            window.scroll(0, 0);
        }
    }
}
export default Router;