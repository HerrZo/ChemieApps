
function sortShuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function fisherYatesShuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const iterations = 1000000;
const arraySize = 12;
const testArray = Array.from({ length: arraySize }, (_, i) => i);

console.time('Sort Shuffle');
for (let i = 0; i < iterations; i++) {
  sortShuffle(testArray);
}
console.timeEnd('Sort Shuffle');

console.time('Fisher-Yates Shuffle');
for (let i = 0; i < iterations; i++) {
  fisherYatesShuffle(testArray);
}
console.timeEnd('Fisher-Yates Shuffle');

// Bias test
function testBias(shuffleFn, name) {
    const counts = {};
    const testArr = [0, 1, 2];
    for (let i = 0; i < 600000; i++) {
        const result = shuffleFn(testArr).join(',');
        counts[result] = (counts[result] || 0) + 1;
    }
    console.log(`\nBias test for ${name}:`);
    Object.keys(counts).sort().forEach(key => {
        console.log(`${key}: ${counts[key]}`);
    });
}

testBias(sortShuffle, 'Sort Shuffle');
testBias(fisherYatesShuffle, 'Fisher-Yates Shuffle');
