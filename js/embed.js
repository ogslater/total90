document.addEventListener("DOMContentLoaded", function() {
    var e = document.createElement("iframe");
    e.src = "https://exemplo.com/seu_embed",
    e.width = "400",
    e.height = "300",
    e.frameborder = "0",
    document.getElementById("embedContainer").appendChild(e)
});