//not refactored for testing purposes
let biff=0;
//***********Abstract object class***********

 class BaseClass{

    constructor(pictureLoc, x, y){

        this.pictureEl = document.createElement('img');
        this.pictureEl.src = pictureLoc;
        this.pictureEl.style.position = "fixed";
        document.body.appendChild(this.pictureEl);

      this.setPositionX(x);
      this.setPositionY(y);
        
        
    }

    deleteObj(){
        this.pictureEl.remove();
        this.pictureEl = null;
    }

     

    setPositionX(X){

        this.posX=X;        
        this.pictureEl.style.left=`${this.posX}px`;
    }

    setPositionY(Y){

        this.posY=Y; 
        this.pictureEl.style.top=`${Y}px`;
    }

    goLeft(){
        this.setPositionX(this.posX-=20);
    }    

    goRight(){        
        this.setPositionX(this.posX+=20);
    } 

    goDown(){        
        this.setPositionY(this.posY+=20);
    } 

    goUp(){        
        this.setPositionY(this.posY-=20);
    } 

    



}






//***********Abstract object class***********


//----------Player.js-------------------
class Player extends BaseClass{



}

//----------Player.js-------------------


//***********Bullet.js***********
class Bullet extends BaseClass{

constructor(pictureLoc, x, y){
    super(pictureLoc, x, y);
    
    setInterval(() => {
        //console.log(this.posY);
        if(this.pictureEl)
        this.goUp();
    }, 500);
    this.pictureEl.addEventListener('click',()=>{
        this.deleteObj();
        biff+=10;
        document.getElementById('biff').innerHTML = biff + ' ₿';
    });


    //const event = new Event('checkPosY');
    //if(this.posY<=150)
    //this.dispatchEvent(event);
    
    //this.pictureEl.dispatchEvent(event);
    //setTimeout(()=>this.deleteObj(),300);

}

}

//***********Bullet.js***********


//-------Main--------
function oneMore(){
    window.location.reload();

}



function timer(){
    let sec = 59;
    let timer = setInterval(function(){
        document.getElementById('timer').innerHTML='0 : '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            let allIm = document.querySelectorAll('img');
            for(let im of allIm){
                if(im.id != "biff")
                if (im.id != "wallet")
                im.remove();

            }
              
            let fin = document.getElementById("gameTitle");
            fin.innerHTML = "Time over!";
            fin.style.visibility="visible"
            let timerId = document.getElementById("timer");
            timerId.style.visibility = "hidden";
            let result = document.getElementById("resultat");
            result.style.left=document.documentElement.clientWidth/2-100+"px";
            result.innerHTML = "You got "+ biff +" ₿!";
            result.style.visibility="visible"
            setTimeout(()=>oneMore(), 7000);

        }
    }, 1000);
}
document.body.style.backgroundColor = '#fffcc6';
document.body.onload = timer;

let txt = document.getElementById("gameTitle");
txt.style.left=document.documentElement.clientWidth/2-100+"px";
txt.style.top=document.documentElement.clientHeight-210-200+"px";
setTimeout(()=>txt.style.visibility="hidden",6000);



const player = new Player('./assets/images/player.png', document.documentElement.clientWidth/2, document.documentElement.clientHeight-210);


let dte =setInterval(()=>{
    player.goRight();
    setTimeout(()=>new Bullet('./assets/images/playerBullet.png', player.posX, player.posY),50);
},1000);

setTimeout(()=>{
    clearInterval(dte);
    callGauche();
},20000);

let gche;
function callGauche(){
     gche = setInterval(()=>{
        player.goLeft();
        setTimeout(()=>new Bullet('./assets/images/playerBullet.png', player.posX, player.posY),50);
    },1000);
    setTimeout(()=>{
        clearInterval(gche);
    },20000);
}







//Control PLayer arrows-space keys
/*
document.addEventListener('keydown', function(event){

    if(event.key=='ArrowLeft' && player.posX > 0)
        player.goLeft();

    if(event.key=='ArrowRight' && player.posX < document.documentElement.clientWidth -100)
        player.goRight();

    if(event.key==' '){
        let playerBullet = new Bullet('./assets/images/playerBullet.png', player.posX, player.posY);


    }    

});*/








