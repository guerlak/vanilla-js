const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                Router.go(event.target.href);
            });
        });
    },

    go: (route, addToHistory=true) => {
        console.log("Going to: " + route, addToHistory);
    }
}

export default Router;