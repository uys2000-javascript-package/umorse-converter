import morse from "../data/morse.mjs";
import {
  customMorseWordToMorseWord,
  morseCharToCustomChar,
  morseCharToTextChar,
} from "./utlis.mjs";

/** @param {string} text */
export const toMorse = function (text) {
  var lowerText = text.toLowerCase();
  const words = lowerText.split(" ");
  const morseWords = words.map((word) => {
    const chars = word.split("");
    const morseChars = chars.map((char) => morse[char]);
    return morseChars.join(" ");
  });
  return morseWords.join(" / ");
};

/** @param {string} text */
export const toCustomMorse = function (text, dot, dash, separatrix) {
  var lowerText = text.toLowerCase();
  const words = lowerText.split(" ");
  const morseWords = words.map((word) => {
    const chars = word.split("");
    const morseChars = chars.map((char) => morse[char]);
    const customMorseChars = morseChars.map((morseChar) =>
      morseChar.replace(/(.)/g, (c) => morseCharToCustomChar(c, dot, dash))
    );
    return customMorseChars.join(" ");
  });
  return morseWords.join(` ${separatrix} `);
};

/** @param {string} text */
export const fromMorse = function (text) {
  const morseWords = text.split(" / ");
  const words = morseWords.map((morseWord) => {
    const morseChars = morseWord.split(" ");
    const chars = morseChars.map(morseCharToTextChar);
    return chars.join("");
  });
  return words.join(" ");
};

export const fromCustomMorse = function (text, dot, dash, separatrix) {
  const customMorseWords = text.split(` ${separatrix} `);
  const words = customMorseWords.map((customMorseWord) => {
    const morseWord = customMorseWordToMorseWord(customMorseWord, dot, dash);
    const morseChars = morseWord.split(" ");
    const chars = morseChars.map(morseCharToTextChar);
    return chars.join("");
  });
  return words.join(" ");
};
