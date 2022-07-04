import wordBank from './word-bank.json';

export function getRandomWord(){
    const randIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randIndex];
}

export enum LetterState{
    Miss,
    Present,
    Match
}

export function computeGuess(guess: string, answer: string) : LetterState[] {
    const result : LetterState[] = [];
    
    const guessArray = guess.split('');
    const answerArray = answer.split('');

    guessArray.forEach((letter, index) => {
        if(answerArray[index] == letter){
            result.push(LetterState.Match);
        }
        else if(answerArray.includes(letter)){
            result.push(LetterState.Present);
        }
        else{
            result.push(LetterState.Miss);
        }
    });

    return result;
}