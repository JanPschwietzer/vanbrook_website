let counter = 0;

function menu() {
    if (counter == 0)
    {
        document.getElementById("openmenu").style.visibility = "visible";
        counter = 1;
    } else {
        document.getElementById("openmenu").style.visibility = "hidden";
        counter = 0;
    }
}