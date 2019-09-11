import puppeteer from 'puppeteer';
import { FeedMemo, blankFeedMemo } from '../services/mangarel/models/feed-memo';

export const feedCalendar = async (page: puppeteer.Page) => {
  const url = 'http://kc.kodansha.co.jp/calendar';
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const memos: FeedMemo[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for await (const _ of [0, 1]) {
    const items = await page.$$('.comicList .contIn .contR .spaceSp .block');

    for await (const item of items) {
      const memo = { ...blankFeedMemo };

      const releaseDate = await item.$eval('.date', e => e.textContent);
      if (releaseDate) memo.releaseDate = releaseDate.replace(/\./g, '-');
      memo.title = await item.$eval('.tit', e => e.textContent);
      const author = await item.$eval('.name', e => e.textContent);
      if (author) memo.author = author.replace(/\s/g, ' ').replace(/，/g, ',');
      memo.publisher = 'kodansha';

      memos.push(memo);
    }

    await page.click('.linkTitW > ul > li:nth-child(2)');
  }

  return memos;
};
