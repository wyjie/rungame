const fibonacci = (n: number): number => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default fibonacci;
