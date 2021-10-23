class RandomNumberService {
  static generate(max) {
    const result = Math.floor(Math.random() * max);
    return result + 1;
  }
}

module.exports = { RandomNumberService };
