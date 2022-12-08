var btns =document.querySelectorAll(".drum");
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var musicValue = this.innerHTML;
        keySound(musicValue);    
        animation(musicValue);
    })
}

document.addEventListener("keydown",function(event){
    var letter = event.key;
    keySound(letter);
    animation(letter);
})

function keySound(letter) {
    switch(letter){
        case 'w':
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case 'a':
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case 's':
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case 'd':
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case 'j':
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case 'k':
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case 'l':
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default:
            break;
        }  
}

function animation(letter) {
    var rqrdBtn = document.querySelector("."+letter);
    rqrdBtn.classList.add("pressed");
    
    setTimeout(function(){
        rqrdBtn.classList.remove("pressed");
    },150);
}

