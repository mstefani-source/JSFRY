const groupAnnograms = (col) => {
  const result = {};

  col.forEach((word) => {
      const sortedWord = [...word].sort().join('');
      
      if (typeof result[sortedWord] === 'string') {
        result[sortedWord] = [word];
      }
      if (Array.isArray(result[sortedWord])) {
        result[sortedWord].push(word)
      }
      if (!result[sortedWord]) {
        result[sortedWord] = word;
      }
    });

  return Object.values(result);
};


console.log(groupAnnograms(["кластер", "кнопка", "домен", "демон", "стрелка", "демо", "сталкер"]));
