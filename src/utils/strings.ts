export const uppercaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const uppercaseFirstLetterOfLastWord = (str: string) => {
  const words = str.split(" ");
  const lastWord = words[words.length - 1];
  const newLastWord = uppercaseFirstLetter(lastWord);
  words[words.length - 1] = newLastWord;
  return words.join(" ");
};
