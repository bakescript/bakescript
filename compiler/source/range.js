function range(start, length) {
  const end = start + (length || 1);
  return { start, end };
}

export { range };
