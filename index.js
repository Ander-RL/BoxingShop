var cards = document.querySelectorAll(".card");


for(var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function() {
        currentCardOpacity(this);
    });
}


function currentCardOpacity(selection) {
    var cardTittle = selection.querySelector(".card-title").innerText;

    switch (cardTittle) {
        case "PUNCHING BAGS":
            setOpacity(selection);
            break;
        case "BOXING GLOVES":
            setOpacity(selection);
            break;
        case "TRAINING PADS":
            setOpacity(selection);
            break;
        case "HEADGUARDS":
            setOpacity(selection);
            break;
        case "VANDAGES":
            setOpacity(selection);
            break;
        case "MOUTHPIECES":
            setOpacity(selection);
            break;
    
        default:
            break;
    }
}


function setOpacity(selection){
    var value = selection.style.opacity;
    if(checkOpacity(value)) {
        selection.style.opacity = 0.5;
        setTimeout(() => {
            selection.style.opacity = 1.0;
        }, 500);
    } 
}

function checkOpacity(opacity) {
    if(opacity < 1.0) return false;
    else return true;
}

