import { describe, expect, it } from 'vitest'
import {getRandomWord} from './word-utils';
import { render, screen, userEvent } from './test/test-utils'

describe('word-utils', () => {
  it('gets random word', () => {
    expect(getRandomWord()).toBeTruthy();
    expect(getRandomWord().length).toEqual(5);
  });
});