let year = new Date().getFullYear();
if(localStorage.getItem("mode") == "zoro"){
    offHovering();
}
if(localStorage.getItem("mode") == "luffy"){
    hovering();
}
year = year.toString();
document.getElementById("mangaLink").style.color = "#304d22";
document.getElementById('trademark').textContent = "©️ Nithilan Elankathir " + year + " All Rights Reserved";
document.getElementById('searchBox').focus();
function hovering() {
    document.getElementById("mangaLink").textContent = "ONE PIECE";
    document.body.style.backgroundImage = "url('/assets/background2.png')";
    document.getElementById("mangaLink").style.color = "#f92828";
    document.getElementById("trademark").style.color = "#f92828";
}
function offHovering(){
    document.getElementById("mangaLink").textContent = "ONE PIECE";
    document.body.style.backgroundImage = "url('/assets/background1.jpg')";
    document.getElementById("mangaLink").style.color = "#304d22";
    document.getElementById("trademark").style.color = "#304d22";
}
/*document.getElementById("mangaLink").onmouseover = function() {
    hovering();
}
document.getElementById("mangaLink").onmouseout = function() {
    offHovering();
}*/
document.getElementById("searchBox").onkeydown = function(e) {
    var keyCode = e.code || e.key;
    let search = document.getElementById("searchBox").value;
    if(keyCode == "Enter"){
        document.getElementById("searchBox").value = "";
        if(search == "discord" || search == "Discord"){
            chrome.windows.create({"url": "https://www.discord.com/app", "incognito": true}); 
        }else if(search == ""){
            window.location.href = "https://www.youtube.com";
        }else if(search == "roblox"){
            window.location.href = "https://www.roblox.com/home";
        }else if(search == "reddit"){
            window.location.href = "https://www.reddit.com/";
        }else if(search.includes("reddit")) {
            search = search.replace("reddit", "");
            window.location.href = "https://www.reddit.com/search/?q=" + search;
        }else if(search == "reload"){
            chrome.runtime.reload();
        }else if(search == "anime"){
            window.location.href = "https://www.crunchyroll.com/";
        }else if(search == "sus"){
            window.location.href = "https://zoro.to/";
        }else if(search == "switch"){
            if(localStorage.getItem("mode") == "zoro"){
                hovering();
                localStorage.setItem("mode", "luffy");
            }else if(localStorage.getItem("mode") == "luffy"){
                offHovering();
                localStorage.setItem("mode", "zoro");
            }
        }else if(search == "purge"){
            var newDate = Date.now();
            var oldDate = new Date(Date.now() - 1000 * (60 * 5));
            chrome.history.deleteRange( {startTime: Number(oldDate) , endTime: Number(newDate)} , function(){ 
                window.alert("[Purge protocol initiated]")
            });        
        }else if(search.includes("purge") && search.includes("youtube") == false){
            search = search.replace("purge", "");
            search = parseInt(search);
            var newDate = Date.now();
            var oldDate = new Date(Date.now() - 1000 * (60 * search));
            chrome.history.deleteRange( {startTime: Number(oldDate) , endTime: Number(newDate)} , function(){ 
                window.alert("[Purge protocol initiated]")
            }); 
        }else if(search.includes(".")){
            window.location.href = "https://www." + search;
        }else{
            window.location.href = "https://www.youtube.com/results?search_query=" + search;
        }
    }
}
document.getElementById('trademark').onclick = function() {
    console.log("Commands Manual:");
    console.log("discord - Opens a new incognito tab with Discord open");
    console.log("roblox - Opens Roblox");
    console.log("(nothing) - Opens YouTube");
    console.log("anime - Opens crunchyroll");
    console.log("sus - Opens zoro.to")
    console.log("switch - Permanently changes the background, can be changed back using switch again")
    console.log("purge - Automatically deletes last 5 minutes of history");
    console.log("purge {number} - Automatically deletes last {number} minutes of history");
    console.log("reddit - Opens Reddit");
    console.log("reddit {query} - Opens Reddit and searches for {query}");
    console.log("reload - Reloads the Chrome extension");
    console.log("{website name (without https:// and www eg., gmail.com)} - Opens {website name}z")
    console.log("(Anything other than the aforementioned commands) - Opens whatever you typed in YouTube");
}
document.getElementById('trademark').onmouseover = function() {
    document.getElementById('trademark').textContent = "Click to view command manual in console (f12)";
}
document.getElementById('trademark').onmouseout = function() {
    document.getElementById('trademark').textContent = "©️ Nithilan Elankathir " + year + " All Rights Reserved";
}