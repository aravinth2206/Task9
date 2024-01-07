let timer=10;
let time =document.getElementById('display');
setTimeout(()=>{
    time.innerHTML=timer--;
    setTimeout(()=>{
        time.className = "badge rounded-pill bg-light text-dark";
        time.innerHTML=timer--;
        setTimeout(()=>{
            time.innerHTML=timer--;
            setTimeout(()=>{
                time.innerHTML=timer--;
                setTimeout(()=>{
                    time.innerHTML=timer--;
                    setTimeout(()=>{
                        time.innerHTML=timer--;
                        setTimeout(()=>{
                            time.innerHTML=timer--;
                            setTimeout(()=>{
                                time.innerHTML=timer--;
                                setTimeout(()=>{
                                    time.innerHTML=timer--;
                                    setTimeout(()=>{
                                        time.innerHTML=timer--;
                                        setTimeout(()=>{
                                            time.innerHTML="HAPPY INDEPENDENCE DAY"
                                            
                                        },1000) 
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
