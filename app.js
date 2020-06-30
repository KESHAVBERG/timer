const countdown = document.querySelector(".countdown");

const interval = setInterval(()=>{
    const deadline =new Date(2020 , 10,13 , 12 , 00 , 00);
    const current =new Date();
    
    const diff = deadline - current;
    const days = Math.floor(diff/(1000*60*60*24));
    
    const hours = current.getHours();
    const mintues = Math.floor((diff/(1000*60))%60);
    const seconds = Math.floor((diff/1000)%60);
    
    
    
    
    countdown.innerHTML =`
    <div data-content = "days">${days.length ===1?`0${days}`:`${days}`} </div>
    <div data-content = "hours">${hours.length ===1?`0${hours}`:`${hours}`}</div>
    <div data-content= "minutes">${mintues.length ===1?`0${mintues}`:`${mintues}`}</div>
    <div data-content = "seconds">${seconds.length ===1?`0${seconds}`:`${seconds}`}</div>
    `;

    if(diff<0){
        clearInterval(interval);
        countdown.innerHTML = "<h1>Here we go</h1>"
    }

    document.querySelector(".reset")
    .addEventListener("click" , ()=>{
        clearInterval(interval);

        const divs = document.querySelectorAll(".countdown div")
        divs.forEach(div =>{
div.innerHTML ="00"
        })
    })
    
},1000)



