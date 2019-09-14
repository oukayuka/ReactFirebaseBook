/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect, useRef, useState } from 'react';

import { Book } from 'services/mangarel/models/book';
import { collectionName } from 'services/mangarel/constants';
import { FirebaseContext } from 'contexts';

const useBook = (id: string) => {
  const [book, setBook] = useState<Book>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const firebaseRef = useRef(useContext(FirebaseContext));

  useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) throw new Error('Firestore is not initialized');
    const collection = db.collection(collectionName.books);

    const load = async () => {
      setLoading(true);
      try {
        const doc = await collection.doc(id).get();
        const bookData = doc.data() as Book;
        setBook({ ...bookData, id: doc.id });
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    load();
  }, [id]);

  return { book, loading, error };
};

export default useBook;
