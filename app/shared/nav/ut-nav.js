function homeHandler() {
     $("#nav-content").load("app/component/home/home.html");
}

function commonHandler() {
     $("#nav-content").load("app/component/common/common.html");
}

function locationHashChanged() {
    (location.hash === "#home") && homeHandler();
    (location.hash === "#common") && commonHandler();
}

window.onhashchange = locationHashChanged;

location.hash = "#home";