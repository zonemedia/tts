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
        var playIcon = document.querySelector(".play-icon");
        var pauseIcon = document.querySelector(".pause-icon");
        if (!isPlaying) {
            startTime = new Date();
            responsiveVoice.speak(text, voice, {rate: rate});
            playIcon.style.display = "none";
            pauseIcon.style.display = "initial";
            isPlaying = true;
            startTyping();
        } else {
            responsiveVoice.pause();
            playIcon.style.display = "initial";
            pauseIcon.style.display = "none";
            isPlaying = false;
            clearInterval(interval);
        }
    });

    responsiveVoice.addEventListener("end", function() {
        var playIcon = document.querySelector(".play-icon");
        var pauseIcon = document.querySelector(".pause-icon");
        playIcon.style.display = "initial";
        pauseIcon.style.display = "none";
        isPlaying = false;
        clearInterval(interval);
        var endTime = new Date();
        var timeDiff = endTime - startTime;
        var seconds = Math.floor(timeDiff / 1000);
        var minutes = Math.floor(seconds / 60);
seconds = seconds % 60;
textTimer.innerHTML = "Waktu yang berlalu: " + minutes + " menit dan " + seconds + " detik.";
});
