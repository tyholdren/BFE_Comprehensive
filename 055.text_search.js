/**
 * https://www.greatfrontend.com/questions/javascript/text-search-ii
 * @param {string} text
 * @param {Array<string>} queries
 * @return {string}
 */
export default function textSearch(text, queries) {
  if (text.trim() === '' || queries.every(query => query === '')) {
    return text;
  }

  const indices = Array(text.length).fill(0);

  for (const query of queries) {
    for (let i = 0; i < text.length; i++) {
      const substr = text.slice(i, i + query.length);
      if (query.toLowerCase() === substr.toLowerCase()) {
        indices.fill(1, i, i + query.length);
        i += query.length - 1;
      }
    }
  }

  let bold = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    const addOpening = indices[i] === 1 && indices[i - 1] !== 1;
    const addClosing = indices[i] === 1 && indices[i + 1] !== 1;

    if (addOpening) {
      char = `<b>${char}`;
    } else if (addClosing) {
      char = `${char}</b>`;
    }

    bold += char;
  }

  return bold;
}
