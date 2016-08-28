function getResponse() {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    //Send image request to unsplash API
    var getAdress =
        "https://api.unsplash.com/photos/random?client_id=a4957391c674d86bc40fa33ae241fd7853ff992a45a54ee52cd8c25b63af2a36&category=4" +
        "&w=" + viewportWidth + "&h=" + viewportHeight;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", getAdress, false);
    xmlHttp.send(null);
    var response = xmlHttp.responseText;

    //Parse the Response and set the variables
    var imageObj = JSON.parse(response);
    var body = document.getElementsByTagName('body')[0];
    var imageUrl = new URL(imageObj.urls.custom);
    var userName = imageObj.user.name;
    var userLink = imageObj.user.links.html;

    //Set the background image
    document.body.style.background = "#ffffff url('" + imageUrl +
        "') no-repeat";
    document.body.style.backgroundSize = "100% auto";
    document.body.style.backgroundPosition = "fixed";

    //Set the credits paragraph
    document.getElementById('credits').innerHTML = "Picture by <a href=\"" +
        userLink + "\" target=\"_blank\">" + userName + "</a>";
}