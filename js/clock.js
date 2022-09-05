const clock = document.querySelector("h2#clock");

function getClock(){
     const date = new Date(); // 내컴퓨터시간
    
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock(); // 바로 보이게 하기 위함.
setInterval(getClock, 1000); // 1초뒤 실행됨
