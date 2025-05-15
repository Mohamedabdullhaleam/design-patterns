function* range(start: number, end: number, step: number) {
  if (step === 0) {
    throw new Error("pls put a valid step -- step can't be zero");
  } else {
    while (start > end) {
      yield start;
      start += step;
    }
    while (start < end) {
      yield start;
      start += step;
    }
  }
}

for (const value of range(0, 10, 1)) {
  console.log(value);
}

console.log([...range(1, 10, 1)]);

const iterator = range(1, 10, 1);

console.log(iterator.next());
