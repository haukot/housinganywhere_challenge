export const runGenerator = (gen) => {
  let value, done;
  while (true) {
    const res = gen.next();
    done = res.done;
    if (done) break;
    value = res.value;
  }
  return value;
}
