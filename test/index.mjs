import { fromMorse, toMorse } from "../src/index.mjs";
import { fromCustomMorse, toCustomMorse } from "../src/service/converter.mjs";
const simpleConvertTest = (text) => {
  const morse = toMorse(text);
  console.log(morse);

  const result = fromMorse(morse);
  console.log(result);
};

const customConvertTest = (text, dot, dash, separatrix) => {
  const morse = toCustomMorse(text, dot, dash, separatrix);
  console.log(morse);

  const result = fromCustomMorse(morse, dot, dash, separatrix);
  console.log(result);
};

console.log("Simple Convert Test");
simpleConvertTest("Hello World");
simpleConvertTest("Hi Guys");
simpleConvertTest("mehmetuysal.dev");
simpleConvertTest("@uys2000/u-morse-converter");

console.log("\nCustom Convert Test");
customConvertTest("Hello World", ":)", "(:", "o_o");
customConvertTest("Hi Guys", "love", "<3", "-_-");
customConvertTest("mehmetuysal.dev", ".:)", "(:", "o_o");
customConvertTest("@uys2000/u-morse-converter", "o_o", "(:", "<3");
