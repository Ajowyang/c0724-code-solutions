export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const result: DocumentIndex = new Map();
  docs.forEach((doc) => {
    const words = doc.content.replace(/[^A-Za-z ]/g, '');

    let wordArr = words.split(' ');
    wordArr = wordArr.map((word) => {
      return word.toLocaleLowerCase();
    });
    console.log(wordArr);
    wordArr.forEach((word) => {
      if (!result.has(word)) {
        const newSet = new Set<Document>();
        newSet.add(doc);
        result.set(word, newSet);
      } else {
        result.get(word)?.add(doc);
      }
    });
  });
  // console.log(result);
  return result;
}
