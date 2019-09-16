import { bigram, trigram } from './n-gram';

describe('Get n-grams', () => {
  describe('Bigram', () => {
    it('should be devided successfully', () => {
      const text = '終末のワルキューレ';
      const result = bigram(text);
      expect(result).toEqual([
        '終末',
        '末の',
        'のワ',
        'ワル',
        'ルキ',
        'キュ',
        'ュー',
        'ーレ',
      ]);
    });
  });

  describe('Trigram', () => {
    it('should be devided successfully', () => {
      const text = '終末のワルキューレ';
      const result = trigram(text);
      expect(result).toEqual([
        '終末の',
        '末のワ',
        'のワル',
        'ワルキ',
        'ルキュ',
        'キュー',
        'ューレ',
      ]);
    });
  });
});
