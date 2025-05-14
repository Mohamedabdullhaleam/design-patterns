function stringIterator(txt: string) {
  let indx = 0;
  return {
    nxt() {
      if (indx < txt.length) {
        return {
          done: false,
          value: txt[indx++],
        };
      } else {
        return {
          done: true,
          value: undefined,
        };
      }
    },
  };
}

const iterator = stringIterator("mohamed");

console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
console.log(iterator.nxt());
