let player1scr = 0;
let player2scr = 0;
let player1 ='x';
let player2 ='o';
let currentPlayer  =player1 ; 
let boxs = {
    row1: {
        box1: '',
        box2: '',
        box3: ''
    },
    row2: {
        box1: '',
        box2: '',
        box3: ''
    },
    row3: {
        box1: '',
        box2: '',
        box3: ''
    }
};

UpdatePlayerScore();
// playerScore(1,0);
function playerScore () {
    
    if (currentPlayer  === player1) {
        player1scr++
        
    }else if (currentPlayer  === player2) {
        player2scr++   
    };
    UpdatePlayerScore();
}
function UpdatePlayerScore() {
    let players1 = document.querySelector('.player1');
    let players2 = document.querySelector('.player2');
    players1.innerHTML ='player_X => '+player1scr;
    players2.innerHTML ='player_O => '+player2scr;
};
function playerTurn() {
    
    currentPlayer  = (currentPlayer  === player1) ? player2 : player1;
    return currentPlayer;    
};
function checkBox(row,box) {

    return  boxs[row][box] === '';
}
function resetBord() {
    for (let i = 1; i <= 3; i++) {
        let rowKey = 'row' + i;
        for (let e = 1; e <= 3; e++) {
            
            let boxKey = 'box' + e;
            let screenBox = document.querySelector(`.${rowKey}#${boxKey}`);
            screenBox.innerHTML =e;  
        }

        
    }
    boxs = {
        row1: {
            box1: '',
            box2: '',
            box3: ''
        },
        row2: {
            box1: '',
            box2: '',
            box3: ''
        },
        row3: {
            box1: '',
            box2: '',
            box3: ''
        }
    };
    
}
console.log(boxs.row1.box1)
function checkDraw() {
    for (let row in boxs) {
        for (let box in boxs[row]) {
            if (boxs[row][box] === '') {
                return false; 
            }
        }
    }
    return true; 
}
function checkWin() {
    for (i=1; i<=3;i++) {
        let x = 'row'+i
    
        if (boxs[x].box1 === currentPlayer &&boxs[x].box2  === currentPlayer &&boxs[x].box3 === currentPlayer ) {
            playerScore();
            resetBord();
            return currentPlayer;
        };
    };
    for (i=1; i<=3;i++) {
        let x = 'box'+i;
    
        if (boxs.row1[x] === currentPlayer && boxs.row2[x] === currentPlayer  && boxs.row3[x] === currentPlayer ) {
            playerScore();
            resetBord();
            return currentPlayer;
        };
    };
    if (boxs.row1.box1 === currentPlayer && boxs.row2.box2 === currentPlayer && boxs.row3.box3 === currentPlayer) {
        playerScore();
        resetBord();
        return currentPlayer;
        
    } else if (boxs.row1.box3 === currentPlayer && boxs.row2.box2 === currentPlayer && boxs.row3.box1 === currentPlayer) {
        playerScore();
        resetBord();
        return currentPlayer;
        
    }else if (checkDraw()) {
        resetBord();
    }else{
         return null;
        }
};



function playerIn() {

        
    
    let row =  prompt('Pick a row number (1-3):');
    let input = prompt('Pick a box number (1-3):');
    if (row >= 1 && row <= 3 && input >= 1 && input <= 3) {
        let rowKey = 'row' + row;
        let boxKey = 'box' + input;

        if (checkBox(rowKey, boxKey)) {
            boxs[rowKey][boxKey] = currentPlayer;
            let screenBox = document.querySelector(`.${rowKey}#${boxKey}`);
            screenBox.innerHTML = currentPlayer;
            let winner = checkWin();
            if (winner) {
                alert(`Player ${winner} wins!`);
            } else {
                playerTurn();
            }
            
            console.log(winner)
        } else {
            alert('Box is already occupied.');
        }
    } else {
        alert('Please pick a valid row and box number.');
    }
    UpdatePlayerScore();
 }


function restart() {
    window.location.reload();
}

