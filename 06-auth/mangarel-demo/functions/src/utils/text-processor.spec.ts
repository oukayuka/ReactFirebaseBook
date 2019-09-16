import {
  chopChink,
  halfWiden,
  hira2kata,
  kanaFullWiden,
  normalize,
  tokenize,
  uniform,
} from './text-processor';

describe('Text processor', () => {
  describe('Convert full-width characters into half-width', () => {
    it('should be converted successfully', () => {
      let text = 'ＧＩＡＮＴ　ＫＩＬＬＩＮＧ（５２） (モーニングコミックス)';
      let result = halfWiden(text);
      expect(result).toBe('GIANT KILLING(52) (モーニングコミックス)');

      text = '天神─TENJIN─ 8 （ジャンプコミックス）';
      result = halfWiden(text);
      expect(result).toBe('天神-TENJIN- 8 (ジャンプコミックス)');
    });
  });

  describe('Convert hiragana characters into katakana', () => {
    it('should be converted successfully', () => {
      const text = 'おおきく振りかぶって（アフタヌーンKC）';
      const result = hira2kata(text);
      expect(result).toBe('オオキク振リカブッテ（アフタヌーンKC）');
    });
  });

  describe('Convert half-width katakana characters into full-width', () => {
    it('should be converted successfully', () => {
      const text = '｢給料日のグルメ(1)（ﾆﾁﾌﾞﾝｺﾐｯｸｽ）｣';
      const result = kanaFullWiden(text);
      expect(result).toBe('「給料日のグルメ(1)（ニチブンコミックス）」');
    });
  });

  describe('Unify text format', () => {
    it('should be unified successfully', () => {
      const text = 'ソノラマ＋コミックス';
      const result = uniform(text);
      expect(result).toBe('ソノラマ+コミックス');
    });
  });

  describe('Normalize raw text into flat for matching', () => {
    it('should be converted successfully with hira2kata', () => {
      const text = "聖☆おにいさん。 (B's-LOG COMICS)";
      const result = normalize(text);
      expect(result).toBe('聖オニイサンbslogcomics');
    });
  });

  describe('Chop raw text roughly', () => {
    it('should be chopped successfully', () => {
      const text = '響~小説家になる方法~（12）(BIG COMIC SUPERIOR)';
      const result = chopChink(text);
      expect(result).toBe('響 小説家になる方法 12 BIG COMIC SUPERIOR');
    });
  });

  describe('Tokenize text for full-text search', () => {
    it('should be tokenized successfully', () => {
      const text = '奥 浩哉';
      const result = tokenize(text);
      expect(result).toEqual(['奥浩', '浩哉']);
    });
    it('should be tokenized successfully with middle dot', () => {
      const text = '同・級・生!!';
      const result = tokenize(text);
      expect(result).toEqual(['同級', '級生']);
    });
    it('should be tokenized successfully with long title', () => {
      const text = '響~小説家になる方法~(BIG COMICS SUPERIOR)';
      const result = tokenize(text);
      expect(result).toEqual([
        '響小',
        '小説',
        '説家',
        '家ニ',
        'ニナ',
        'ナル',
        'ル方',
        '方法',
        'big',
        'comic',
        'superior',
      ]);
    });
  });
});
