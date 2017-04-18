debugger;
var url = document.URL;
var decodedUrl = punycode.toUnicode(url);
if (url !== decodedUrl) {
        var div = document.createElement("div");
        document.body.insertBefore(div, document.body.childNodes[0]);
        div.style = "background-color: #540000; color: white;";
        div.innerText = "This website seems to be unsafe. The reason we believe that is because the url is using punycode. Please note that this website is "+url+ " not "+decodedUrl+ ".";
    }