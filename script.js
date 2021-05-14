let counter = 0;

function menu() {
    if (counter == 0)
    {
        document.getElementById("openmenu").innerHTML = '<a href="https://soundcloud.com/philvanbrook" target="_blank">Soundcloud</a><a href="https://open.spotify.com/artist/64kc5LSOxVU7RE0hNua1Ot?si=2WOdlfBiR82v1PMLSothoA" target="_blank">Spotify</a><a href="https://www.youtube.com/philvanbrook" target="_blank">YouTube</a><a href="https://www.twitch.tv/philvanbrook" target="_blank">Twitch</a>';
        counter = 1;
    } else {
        document.getElementById("openmenu").innerHTML = "";
        counter = 0;
    }
}