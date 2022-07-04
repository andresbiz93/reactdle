import { describe, expect, it } from 'vitest'
import {getRandomWord, computeGuess, LetterState} from './word-utils';
import { render, screen, userEvent } from './test/test-utils'

describe('getRandomWord', () => {
  it('gets random word', () => {
    expect(getRandomWord()).toBeTruthy();
    expect(getRandomWord().length).toEqual(5);
  });
});

describe('computeGuess', () => {
  it('works with match and present', () => {
    expect(computeGuess('boost', 'boost')).toEqual([
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
    ]);
    expect(computeGuess('boost', 'slain')).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Present,
      LetterState.Miss
    ]);
  });
  it('works with full miss', () => {
    expect(computeGuess('lindy', 'boost')).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
    ]);
  });

  it('one match when double letter', () => {
    expect(computeGuess('loves', 'boost')).toEqual([
      LetterState.Miss,
      LetterState.Match,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Present,
    ]);
  });
});