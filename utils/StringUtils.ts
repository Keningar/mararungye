export default class StringUtils {
  private word: string

  private constructor(word: string) {
    this.word = word;
  }

  static setWord(word: string)
  {
    return new StringUtils(word)
  }

  capitalize() {
    this.word = this.word[0].toUpperCase() + this.word.slice(1).toLowerCase();
    return this
  }

  getWord() {
    return this.word
  }
}
