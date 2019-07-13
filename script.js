

document.onload = Init();

function Init() {

    var ball = document.getElementById('ball');
    
    ball.onclick = function() {

        shake();
        removeContent();
        setTimeout(getAnswer, 800);
    }

    ball.oncontextmenu = function() {
        return false;
    }

    ball.onmousedown = function() {
        return false;
    }
}


function shake() {

    move(30, 200);
    move(-20, 300);
    move(30, 400); 
    move(0, 500); 
    
    function move(index, time) {

        setTimeout(() => {

            ball.style.marginTop = index + 'px'
            
        }, time);
    }
}


function removeContent() {

    var text = document.getElementById('text');
    text.remove();
}


function getAnswer() {

    var rand = db.list[Math.floor(Math.random() * db.list.length)];

    addAnswer(db.answers[rand]);

    function addAnswer(content) {

        document.getElementById('triangle').innerHTML = content;

        setTimeout(seeming, 250); 
    }
}


function seeming() {

    var text = document.getElementById('text');
    var seeming = 0.1;
    var timer;

    showText();
    
    function showText() {
        
        text.style.opacity = seeming;
        seeming = seeming + 0.1;
    
        if (seeming > 1) {

            clearTimeout(timer);        
        }
        else{

            timer = setTimeout(showText, 350);
        }
    }
}










