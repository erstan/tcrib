import './Text.css';
const textStyle = {
    height: '65vh',
    fontSize: '30px',
    textAlign: 'left'
}
let toggleDir = function() {
        let current_dir = document.getElementById("text").getAttribute("dir");
        let new_dir, new_text_align;
        if(current_dir == "rtl") {
            new_dir = "ltr";
            new_text_align = "left";
        } else if (current_dir == "ltr") {
            new_dir = "rtl";
            new_text_align = "right";
        }
        document.getElementById("text").setAttribute("dir", new_dir);
        document.getElementById("text").style.textAlign = new_text_align;
        document.getElementById("dir-toggle").innerText = new_dir;
        // direction settings not saved
        document.getElementById("save").innerText = "Save [*]";
};
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
let fontSizeDown = function(arg) {
    let current_size = parseInt(document.getElementById("text").style.fontSize);
    let new_size = current_size - 3;
    new_size += "px";
    document.getElementById("text").style.fontSize = new_size;
    document.getElementById("font-size").innerText = new_size;

    // font size settings not saved
    document.getElementById("save").innerText = "Save [*]";
}
let fontSizeUp = function(arg) {
    let current_size = parseInt(document.getElementById("text").style.fontSize);
    let new_size = current_size + 3;
    new_size += "px";
    document.getElementById("text").style.fontSize = new_size;
    document.getElementById("font-size").innerText = new_size;

    // font size settings not saved
    document.getElementById("save").innerText = "Save [*]";
}
let resetSettings = function() {
    document.getElementById("text").style.fontSize = "30px";
    document.getElementById("font-size").innerText = "30px";
    document.getElementById("text").setAttribute("dir", "ltr");
    document.getElementById("text").style.textAlign = "left";
    document.getElementById("dir-toggle").innerText = "ltr";
    sessionStorage.removeItem("dir");
    sessionStorage.removeItem("fsize");
}
function Text() {
    return <div>
        <button id="dir-toggle" onClick={toggleDir}>rtl</button>
        <button className="font-size-controller" id="font-size-down" onClick={fontSizeDown}> - </button>
        <span>Size : </span><span id="font-size">30px</span>
        <button className="font-size-controller" id="font-size-up" onClick={fontSizeUp}> + </button>
        <button id="save" onClick={saveWork}>Save [ ]</button>
        <button id="reset-settings" onClick={resetSettings}>Reset Settings</button><br />
        <textarea dir="ltr" id="text" style={textStyle}></textarea>
    </div>;
}
export default Text;