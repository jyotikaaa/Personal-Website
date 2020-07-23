var isOpen = 0;
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {

    if (isOpen == 0) {
        document.getElementById("mySidenav").style.width = "250px";
        /*document.getElementById("main").style.marginLeft = "250px";*/
        bgcol = document.body.style.backgroundColor;
        document.body.style.opacity = "80%";
        isOpen = 1;
    } else {
        document.body.style.opacity = "100%";
        closeNav();
        isOpen = 0;
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.body.style.opacity = "100%";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/*For sending mail */
function sendMail() {
    var input = document.getElementById('subject');
    subject = input.value;
    var input = document.getElementById('message');
    message = input.value;
    window.open("mailto:sawlanijyotika@gmail.com?subject=" + subject + "&body=" + message);
}

function myOverFunction() {
    var x = document.getElementById("cc");
    x.style.visibility = "visible";
}

function myOutFunction() {
    var x = document.getElementById("cc");
    x.style.visibility = "hidden";
}