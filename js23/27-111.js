[1, 2, 3].filter((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스:${index}, this: ${JSON.stringify(arr)}`);
  return item % 2;
});
