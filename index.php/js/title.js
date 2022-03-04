if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["|", " ?|", "N|", "No|", "No-|", "No-W|", "No-Wa|", "No-War|", "No-War |", "No-War I|", "No-War In|", "No-War In |", "No-War In U|", "No-War In Uk| ", "No-War In Ukr|", "No-War In Ukra|", "No-War In Ukrai|", "No-War In Ukrain|", "No-War In Ukraine|", "No-War In Ukraine", "No-War In Ukraine", "No-War In Ukraine", "No-War In Ukrain|", "No-War In Ukrai|", "No-War In Ukra|", "No-War In Ukr|", "No-War In Uk|", "No-War In U|", "No-War In |", "No-War In T|", "No-War In Th|", "No-War In The|", "No-War In The |",  "No-War In The W|", "No-War In The Wo|", "No-War In The Wor|", "No-War In The Worl|", "No-War In The World|", "No-War In The World",  "No-War In The World", "No-War In The World", "No-War In The World", "No-War In The World", "No-War In The World|", "No-War In The Worl|", "No-War In The Wor|", "No-War In The Wo|", "No-War In The W|", "No-War In The W|", "No-War In The|", "No-War In Th|", "No-War In T|", "No-War In |", "No-War In|", "No-War I|", "No-War |", "No-War|", "No-Wa|", "No-W|", "No-|", "No|", "N|",  "|", " .|", "$|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

