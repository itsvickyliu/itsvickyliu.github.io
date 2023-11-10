var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function openmenu(){
    sidemenu.style.display = "block";
    xmark.style.display = "block";
    bars.style.display = "none";
}
function closemenu(){
    sidemenu.setAttribute("style", "display: none;");
    xmark.setAttribute("style", "display: none;");
    bars.style.display = "block";
}


var nav = '<div class="small-menu" style="text-align: right;">'+
        '<i id="bars" class="fa-solid fa-bars" onclick="openmenu()"></i>'+
    '</div>'+
    '<div class="small-menu">'+
        '<i id="xmark" class="fa-solid fa-xmark" onclick="closemenu()"></i>'+
    '</div>'+
    '<nav>'+
        '<ul id="sidemenu1" class="s1">'+
            '<li><a href="/index.html">About</a></li>'+
            '<li><a href="/tech.html" target="_blank" rel="noopener noreferrer">Portfolio</a></li>'+
            '<li><a href="/courses.html" target="_blank" rel="noopener noreferrer">Courses</a></li>'+
            '<li><a href="/playground.html" target="_blank" rel="noopener noreferrer">Playground</a></li>'+
        '</ul>'+
    '</nav>'+
    '<nav>'+
        '<ul id="sidemenu2" class="s2">'+   
            '<li><a href="/index.html">About</a></li>'+
            '<li><a href="/tech.html" target="_blank" rel="noopener noreferrer">Portfolio</a></li>'+
            '<li><a href="/courses.html" target="_blank" rel="noopener noreferrer">Courses</a></li>'+
            '<li><a href="/playground.html" target="_blank" rel="noopener noreferrer">Playground</a></li>'+
        '</ul>'+
    '</nav>';

var placeholder = document.getElementById("placeholder");

placeholder.innerHTML = nav;

var sidemenu = document.getElementById("sidemenu2");
var xmark = document.getElementById("xmark");
var bars = document.getElementById("bars");