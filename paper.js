const match = () => {
    let PlayerScoreCounter = 0;
    let AIScoreCounter = 0;
    let moves = 0;

    const gameStart = () => {
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');

        const playerOptions = [ rockBtn, paperBtn, scissorsBtn ];
        const AIOptions = [ 'rock', 'paper', 'scissors' ];

        playerOptions.forEach( (option) => {
            option.addEventListener('click', () => {
                const MoveCount = document.querySelector('.MoveCount');
                moves++;
                MoveCount.innerText = `Moves Remaining:${10-moves}`;

                // console.log(`${MoveCount.innerText}`);

                const Choices = Math.floor(Math.random() *3);
                const AIChoice = AIOptions[Choices];

                winner(this.innerText, AIChoice);

                if (moves == 10) {
                    GameOver(playerOptions, MoveCount);
                }
            })
        })
    }

    const winner = (Player, AI) => {
        const result = document.querySelector('.winner');
        const PlayerScoreUpdate = document.querySelector('.PlayerScoreCounter');
        const AIScoreUpdate = document.querySelector('.AIScoreCounter');
        if (Player === AI) {
            result.textContent = "It's a Tie...";
        }
        else if (Player ==  'rock') {
            if (AI == 'paper') {
                result.textContent = "AI wins!";
                AIScoreCounter++;
                AIScoreUpdate.textContent = AIScoreCounter;
            } else {
                result.textContent = "Player wins!";
                PlayerScoreCounter++;
                PlayerScoreUpdate.textContent = PlayerScoreCounter;
            }
        }
        else if (Player == 'scissors') {
            if (AI == 'rock') {
                result.textContent = "AI wins!";
                AIScoreCounter++;
                AIScoreUpdate.textContent = AIScoreCounter;
            } else {
                result.textContent = "Player wins!";
                PlayerScoreCounter++;
                PlayerScoreUpdate.textContent = PlayerScoreCounter;
            }
        }
        else if (Player == 'paper') {
            if (AI == 'scissors') {
                result.textContent = "AI wins!";
                AIScoreCounter++;
                AIScoreUpdate.textContent = AIScoreCounter;
            } else {
                result.textContent = "Player wins!";
                PlayerScoreCounter++;
                PlayerScoreUpdate.textContent = PlayerScoreCounter;
            }
        }
    }

    const GameOver = (playerOptions, MoveCount) => {
        const NextMove = document.querySelector('.gestures');
        const result = document.querySelector('.winner');
        const RestartBtn = document.querySelector('.restart');

        playerOptions.forEach( (option) => {
            option.style.display = 'none';
        })

        NextMove.innerText = "That's All Folks!!!";
        MoveCount.style.display = 'none';
        // console.log(NextMove);

        if (PlayerScoreCounter > AIScoreCounter) {
            result.style.fontsize = '2rem';
            result.innerText = "The 'Victory'... is your's!";
            result.style.colour = 'green';
        }
        else if (PlayerScoreCounter < AIScoreCounter) {
            result.style.fontsize = '2rem';
            result.innerText = "...Better luck next time!";
            result.style.colour = 'red';
        }
        else {
            result.style.fontsize = '2rem';
            result.innerText = "It's... a TIE?!!";
            result.style.colour = 'grey';
        }
        RestartBtn.innerText = 'Reload';
        RestartBtn.addEventListener('click', () => {
            window.location.restart();
        })
    }

    gameStart();
}

match();
