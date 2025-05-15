function range(start: number, end: number, step: number) {
  let current = start;
  return {
    next() {
      if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
        return { done: true, value: undefined };
      }
      const result = { done: false, value: current };
      current += step;
      return result;
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

for (const value of range(0, 10, 1)) {
  console.log(`here is your value  ${value}`);
}

console.log([...range(1, 10, 1)]);
const iterator = range(1, 10, 1);

console.log(iterator.next());
