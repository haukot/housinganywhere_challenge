// NOTE disable because it's utils module
/* eslint-disable import/prefer-default-export */

export const runGenerator = (gen) => {
  let res;
  while (true) {
    const { done, value } = gen.next();
    if (done) {
      break;
    } else {
      res = value;
    }
  }
  return res;
};
