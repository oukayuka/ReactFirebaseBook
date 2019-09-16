/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect, useRef, useState } from 'react';
import { startOfDay } from 'date-fns';

import { Book } from 'services/mangarel/models/book';
import { collectionName } from 'services/mangarel/constants';
import { FirebaseContext } from 'contexts';

type booksOptions = {
  limit?: number;
};
const defaultOptions: booksOptions = {
  limit: 30,
};

const useBooks = (options?: booksOptions) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const firebaseRef = useRef(useContext(FirebaseContext));
  const optionsRef = useRef({ ...defaultOptions, ...options });

  useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) throw new Error('Firestore is not initialized');
    const query = db
      .collection(collectionName.books)
      .where('publishedOn', '>=', startOfDay(new Date()))
      .orderBy('publishedOn', 'asc')
      .limit(optionsRef.current.limit!);

    const load = async () => {
      setLoading(true);
      try {
        const snap = await query.get();
        const booksData = snap.docs.map(doc => ({
          ...(doc.data() as Book),
          id: doc.id,
        }));
        setBooks(booksData);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { books, loading, error };
};

export default useBooks;
