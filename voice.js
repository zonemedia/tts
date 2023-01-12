    // Populate voice select
    var voices = window.speechSynthesis.getVoices();
    for(var i = 0; i < voices.length; i++) {
        var option = document.createElement("option");
        option.value = voices[i].name;
        option.innerHTML = voices[i].name;
        voiceSelect.appendChild(option);
    }

    speakButton.onclick = function() {
        var text = textOutput.innerHTML;
        var msg = new SpeechSynthesisUtterance();
        var selectedVoice = voiceSelect.value;

        if (!text) {
            errorMessage.innerHTML = "Tolong masukkan teks yang akan di ucapkan";
            return;
        }
        
        errorMessage.innerHTML = "";

        if (!selectedVoice) {
            errorMessage.innerHTML = "Tolong pilih suara yang akan di gunakan";
            return;
        }

        for(var i = 0; i < voices.length; i++) {
            if(voices[i].name === selectedVoice) {
                msg.voice = voices[i];
                break;
            }
        }

        msg.rate = rateInput.value;
        msg.pitch = 1;
        msg.text = text;
        window.speechSynthesis.speak(msg);
        speakButton.disabled = true;
        stopButton.disabled = false;
    }

    stopButton.onclick = function() {
        window.speechSynthesis.cancel();
        speakButton.disabled = false;
        stopButton.disabled = true;
    }

rateInput.oninput = function() {
msg.rate = rateInput.value;
}
// untuk mengambil suara setelah selesai load
window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    var option;
    for(var i = 0; i < voices.length; i++) {
        option = document.createElement("option");
        option.value = voices[i].name;
        option.innerHTML = voices[i].name;
        voiceSelect.appendChild(option);
    }
}
