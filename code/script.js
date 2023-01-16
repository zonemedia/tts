    var ttsButton = document.getElementById("tts-button");
    var voiceSelector = document.getElementById("voice-selector");
    var speedControl = document.getElementById("speed-control");
    var startTime;
    var textTimer = document.getElementById("text-timer");
    var isPlaying = false;
    var text = document.getElementById("text-reading").innerText;
    var currentIndex = 0;
    var textElement = document.getElementById("text-reading");
    var interval;

    function typeText() {
        var char = text.substr(currentIndex, 1);
        currentIndex++;
        textElement.innerHTML += char;
        textElement.scrollIntoView({behavior: 'smooth', block: 'end'});
        if (currentIndex === text.length) {
            clearInterval(interval);
        }
    }

    function startTyping() {
        currentIndex = 0;
        textElement.innerHTML = "";
        interval = setInterval(typeText, 66);
    }

    ttsButton.addEventListener("click", function(){
        var voice = voiceSelector.value;
        var rate = speedControl.value;
        if (!isPlaying) {
            startTime = new Date();
            responsiveVoice.speak(text, voice, {rate: rate});
            ttsButton.innerHTML = '&#10073;&#10073;';
            isPlaying = true;
            startTyping();
        } else {
            responsiveVoice.pause();
            ttsButton.innerHTML = '&#9658;';
            isPlaying = false;
            clearInterval(interval);
        }
    });

    responsiveVoice.addEventListener("end", function() {
        isPlaying = false;
        clearInterval(interval);
        textElement.scrollTop = textElement.scrollHeight;
    });

let link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/gh/zonemedia/tts/code/3.css';

document.querySelector('head').appendChild(link);
