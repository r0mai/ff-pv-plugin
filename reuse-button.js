function plugin() {
    var url_split = new URL(window.location.href).pathname.split('/');
    if (url_split[0] !== "" || url_split[1] !== "v" || url_split[2].length !== 12) {
        return;
    }

    oid = url_split[2];

    console.log("Plugin loaded");
    var reuse_buttons = document.getElementsByClassName("reuse-button");
    if (reuse_buttons.length != 1) {
        return;
    }
    
    var reuse_button = reuse_buttons[0];
    
    var desktop_link = document.createElement("a");
    desktop_link.href = "prezi-video://go-live/from-video/lite/" + oid;
    desktop_link.innerText = "Reuse on desktop";
    
    reuse_button.parentNode.insertBefore(desktop_link, reuse_button.nextSibling);
    
    console.log("Reuse button added");
}

plugin();
