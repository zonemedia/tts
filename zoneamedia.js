var startTime,interval,ttsButton=document.getElementById("tts-button"),voiceSelector=document.getElementById("voice-selector"),speedControl=document.getElementById("speed-control"),textTimer=document.getElementById("text-timer"),isPlaying=!1,text=document.getElementById("text-reading").innerText,currentIndex=0,textElement=document.getElementById("text-reading");function typeText(){var e=text.substr(currentIndex,1);currentIndex++,textElement.innerHTML+=e,currentIndex===text.length&&clearInterval(interval)}function startTyping(){currentIndex=0,textElement.innerHTML="",interval=setInterval(typeText,66)}ttsButton.addEventListener("click",function(){var e=voiceSelector.value,t=speedControl.value,n=document.querySelector(".play-icon"),i=document.querySelector(".pause-icon");isPlaying?(responsiveVoice.pause(),n.style.display="initial",i.style.display="none",isPlaying=!1,clearInterval(interval)):(startTime=new Date,responsiveVoice.speak(text,e,{rate:t}),n.style.display="none",i.style.display="initial",isPlaying=!0,startTyping())}),responsiveVoice.addEventListener("end",function(){var e=document.querySelector(".play-icon"),t=document.querySelector(".pause-icon");e.style.display="initial",t.style.display="none",isPlaying=!1,clearInterval(interval);var n=Math.floor((new Date-startTime)/1e3),i=Math.floor(n/60);n%=60,textTimer.innerHTML="Waktu yang berlalu: "+i+" menit dan "+n+" detik."});
let link = document.createElemet('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
document.querySelector('head').appendChild(link);