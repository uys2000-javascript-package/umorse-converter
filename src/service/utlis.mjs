import morse from "../data/morse.mjs";
/**
 * @param {string} morseChar
 * @param {string} dot
 * @param {string} dash
 */
export const morseCharToCustomChar = (morseChar, dot, dash) => {
  switch (morseChar) {
    case ".":
      return dot;
    case "-":
      return dash;
    default:
      return morseChar;
  }
};

/** @param {string} morseChar */
export const morseCharToTextChar = (morseChar) => {
  const charIndex = Object.values(morse).indexOf(morseChar);
  return Object.keys(morse)[charIndex];
};

/** @param {string} s */
export const escapeForRegex = (s) => {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

/**
 * @param {string} customMorseWord
 * @param {string} dot
 * @param {string} dash
 */
export const customMorseWordToMorseWord = (customMorseWord, dot, dash) => {
  return customMorseWord.replace(
    new RegExp(`${escapeForRegex(dot)}|${escapeForRegex(dash)}`, "g"),
    (customMorseChar) => customMorseCharToMorseChar(customMorseChar, dot, dash)
  );
};

/**
 * @param {string} customMorseChar
 * @param {string} dot
 * @param {string} dash
 */
export const customMorseCharToMorseChar = (customMorseChar, dot, dash) => {
  switch (customMorseChar) {
    case dot:
      return ".";
    case dash:
      return "-";
    default:
      return customMorseChar;
  }
};
