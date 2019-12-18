import fetch from 'node-fetch';
import forEach from 'lodash/forEach';
import { BookItem } from './models/book-item';

const BASE_URL =
  'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

type SearchParams = {
  title?: string | null;
  author?: string | null;
  publisherName?: string | null;
  isbn?: string | null;
  booksGenreId?: string;
  outOfStockFlag?: number; // 品切れ等購入不可商品表示フラグ
  sort?: string;
};

const defaultSearchParams: SearchParams = {
  booksGenreId: '001001', // 漫画（コミック）
  outOfStockFlag: 1, // 絶版も検索対象にする
};

export const findBookItem = async (
  params: SearchParams,
  applicationId: string,
) => {
  const searchParams: SearchParams = { ...defaultSearchParams, ...params };
  const queries = new URLSearchParams();

  forEach(searchParams, (v, k) => {
    const value = String(v || '').trim();
    if (value) queries.set(k, value);
  });
  queries.set('applicationId', applicationId);

  const url = `${BASE_URL}?${queries.toString()}`;
  const bookItems: BookItem[] = [];
  const res = await fetch(url);
  const data = await res.json();

  if (data.Items) {
    data.Items.forEach((elem: { Item: BookItem }) => bookItems.push(elem.Item));
  }

  return bookItems[0] || null;
};
