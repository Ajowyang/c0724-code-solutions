import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const result = new Set<Document>();
  const lowerQuery = query.toLocaleLowerCase();

  index.forEach((value, key) => {
    if (lowerQuery.includes(key)) {
      index.get(key)?.forEach((title) => {
        result.add(title);
      });
    }
  });

  console.log(lowerQuery);
  console.log(result);
  return result;
}
