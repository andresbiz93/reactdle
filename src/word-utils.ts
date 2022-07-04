import wordBank from './word-bank.json';

export function getRandomWord(){
    const randIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randIndex];
}