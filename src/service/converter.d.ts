export function toMorse(text: string): string;
export function toCustomMorse(
  text: string,
  dot: string,
  dash: string,
  separatrix: string
): string;

export function fromMorse(text: string): string;

export function fromCustomMorse(
  text: string,
  dot: string,
  dash: string,
  separatrix: string
): string;
