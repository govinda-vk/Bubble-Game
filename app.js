

let score=0;
let hitnum=0;

function makebubbel(){
    let clutter="";
for(let i=1 ;i<=141; i++){

    var rn=Math.floor(Math.random()*10);

     clutter+=`<div class="bubbel">${rn}</div>`;
}

document.querySelector("#botpanel").innerHTML=clutter;
}

function gethit(){

    hitnum=Math.floor(Math.random()*10);

    document.querySelector("#hitval").textContent=hitnum;
}


 let timer=60;
function runtimer(){
     
    let timerintr= setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector("#time").textContent=timer;
        }
    else{
        clearInterval(timerintr);

        document.querySelector("#botpanel").innerHTML=`<h1 class="gameend">Game over</h1>`
   
   }
}, 1000);

}

    function increasescore(){
         score+=10;
         document.querySelector("#score").textContent=score;


    }

    document.querySelector("#botpanel").addEventListener("click" ,function(details){
      let clickedbut=Number(details.target.textContent);

      if(clickedbut==hitnum){

        increasescore();
        makebubbel();
        gethit();
        
      }

    });


makebubbel();
gethit();
runtimer();
