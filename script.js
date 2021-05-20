var character = document.getElementById("character");
var block = document.getElementById("block");
var points=0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
    var checkdead = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        points++;
        if(blockLeft<20 && blockLeft>0 && characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            
            alert("You LOSE.Your points = "+ points);
            
        }
                
    },10)
    var points = 0;
    
}