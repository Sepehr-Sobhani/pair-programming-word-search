const wordSearch = (letters, word) => {
  if (letters.length !== 0 || letters[0].length !== 0) {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const verticalJoin = letters[0].map((_, colIndex) =>
      letters.map((row) => row[colIndex])
    );
    const newVerticalJoin = [];
    for (let letter of verticalJoin) {
      newVerticalJoin.push(letter.join(""));
    }
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (l of newVerticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  } else return false;
};

module.exports = wordSearch;
