import './Audio.css';
import delay from '../utilities/delay';
let rewind = 1;
let rewindUp = function() {
    let rewind_increment = 0.5;
    rewind = rewind + rewind_increment;
    document.getElementById("rewind").innerText = rewind * 1000;
}
let rewindDown = function() {
    if(rewind === 0) return;
    let rewind_increment = -0.5;
    rewind = rewind + rewind_increment;
    document.getElementById("rewind").innerText = rewind * 1000;
}
let pauseForFewSeconds = function() {
    document.getElementById("audio_player").pause();
    delay(function() {
        let presentTime = document.getElementById("audio_player").currentTime;
        document.getElementById("audio_player").currentTime = (presentTime>rewind)?
                                        (presentTime - rewind): 0;
                                        document.getElementById("audio_player").play();
    }, 1500);
}
function Audio() {
    return <>
        <input id="audio_file" type="file" accept="audio/*" />
        <hr />
        <button className="rewind-controller" id="rewind-down" onClick={rewindDown}> - </button>
            <span>Auto-rewind : </span><span id="rewind">1000</span><span>ms</span>
        <button className="rewind-controller" id="rewind-up" onClick={rewindUp}> + </button>
        <audio controls id="audio_player"></audio>
        <hr />
    </>;
}
export default Audio;
export {pauseForFewSeconds};