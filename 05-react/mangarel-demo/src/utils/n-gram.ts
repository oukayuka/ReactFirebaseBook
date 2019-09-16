/*
 * This function is ported from https://www.npmjs.com/package/n-gram
 *   Copyright (c) 2014 Titus Wormer <tituswormer@gmail.com>
 *   (The MIT License)
 */
export const nGram = (n: number) => {
  if (n < 1 || n === Infinity) {
    throw new Error(`${n} is not a valid argument for n-gram`);
  }

  return (value: string | null) => {
    const nGrams: string[] = [];
    let index = 0;

    if (!value) {
      return nGrams;
    }

    index = value.length - n + 1;

    if (index < 1) {
      return nGrams;
    }

    // eslint-disable-next-line no-plusplus
    while (index--) {
      nGrams[index] = value.slice(index, index + n);
    }

    return nGrams;
  };
};

export const bigram = nGram(2);
export const trigram = nGram(3);
