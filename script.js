const setButton = document.getElementById("set-button");


const timers =document.getElementById("timer-cards");

function setTimer(){
    const haurs = parseInt(document.getElementById("haurs").value);
    const minutes = parseInt(document.getElementById("minutes").value);
    const seconds = parseInt(document.getElementById("seconds").value);
    const noTimers = document.getElementById("no-timer");
    

    document.getElementById("haurs").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    
    let timerInterval ;
    let totalseconds = 0;
    let timeLeft = "";

    console.log(haurs, minutes, seconds);



    function updateTimerDisplay(card){
        const alarmTime = card.querySelector("#alarm-time");
        const hours = Math.floor(totalseconds / 3600);
        const minutes = Math.floor((totalseconds % 3600) / 60);
        const seconds = totalseconds % 60;
        alarmTime.textContent =  `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : `${time}`;
    }



    if(isNaN(haurs) || isNaN(minutes) || isNaN(seconds) || haurs<0 || minutes<0 || seconds<0){
        alert("invalid time input")
        return;
    }
    else{
        totalseconds = haurs*3600 + minutes*60 + seconds;

        
    
        
        noTimers.classList.add("vanish");
        const card = document.createElement("div");
        card.className = "timer";
        card.innerHTML = `
        <div><p>Time Left:</p></div>
        <div id="alarm-time"></div>
        <div><button type="submit" id="del-button" onclick = "">Delete</button></div>
        `

        timers.appendChild(card);

        updateTimerDisplay(card);

        timerInterval = setInterval(function () {
            if (totalseconds > 0) {
                totalseconds--;
                updateTimerDisplay(card);
            } else {
                clearInterval(timerInterval);
                card.innerHTML = `
                <h3>Timer is Up</h3>
                `
                card.classList.add("yellow-card")

                alert('Timer expired!');

            }
        }, 1000);

        
        
        
    }
}






setButton.addEventListener("click",setTimer);

