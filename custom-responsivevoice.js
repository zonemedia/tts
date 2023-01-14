const allowButton = document.getElementById("allow-button");
const denyButton = document.getElementById("deny-button");

allowButton.addEventListener("click", function(){
    responsiveVoice.allowSpeechClicked(true);
});

denyButton.addEventListener("click", function(){
    responsiveVoice.allowSpeechClicked(false);
});
