import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {pauseForFewSeconds} from './components/Audio';
ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
window.onload = function() {
    if (localStorage["work"]) {
        let saved_work = localStorage["work"];
        document.getElementById("text").value = saved_work;
        document.getElementById("save").innerText = "Save [ ]";
    }
    if(sessionStorage["dir"]) {
        let saved_dir = sessionStorage["dir"];
        let text_align;
        if(saved_dir == "rtl") {
            text_align = "right";
        } else if (saved_dir == "ltr") {
            text_align = "left";
        }
        document.getElementById("text").setAttribute("dir", saved_dir);
        document.getElementById("dir-toggle").innerText = saved_dir;
        document.getElementById("text").style.textAlign = text_align;
    }
    if(sessionStorage["fsize"]) {
        let saved_fsize = sessionStorage["fsize"];
        document.getElementById("text").style.fontSize = saved_fsize;
        document.getElementById("font-size").innerText = saved_fsize;
    }
console.log("page has been loaded");  
}
document.getElementById("audio_file").onchange = function() {
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    document.getElementById("audio_player").src = file; 
    document.getElementById("audio_player").play();
    console.log("played");
};
let transcriptionActive = function() {
    // new text not saved
    document.getElementById("save").innerText = "Save [*]";
    pauseForFewSeconds();
}
document.getElementById("text").addEventListener("input", (event) => transcriptionActive());

let saveWork = async function () { 
    // save work in localStorage object
    let work = document.getElementById("text").value;
    localStorage.setItem("work", work);
    document.getElementById("save").innerText = "Save [ ]";
    // save direction setting in sessionStorage object
    let dir = document.getElementById("dir-toggle").innerText;
    sessionStorage.setItem("dir", dir);
    // save the font size setting in sessionStorage object
    let fsize = document.getElementById("text").style.fontSize;
    sessionStorage.setItem("fsize", fsize);
}
document.getElementById('text').addEventListener('keydown', function(e){
    if (e.ctrlKey) {
        if(e.key === "s" || e.code == "KeyS") {
            e.preventDefault();
            e.stopPropagation();
            saveWork();
        }
    }
});


