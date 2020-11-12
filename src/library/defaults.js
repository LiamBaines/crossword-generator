const acrossArray = [
  [1,  1,  1,  1,  1,  1,  0,  4,  4,  4,  4,  4,  4],
  [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [9,  9,  9,  9,  9,  9,  9,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  10, 10, 10, 10, 10, 10, 10],
  [11, 11, 11, 11, 11, 0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  0,  0,  12, 12, 12, 12, 12],
  [0,  0,  0,  0,  14, 14, 14, 14, 14, 0,  0,  0,  0],
  [15, 15, 15, 15, 15, 0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  0,  0,  17, 17, 17, 17, 17],
  [18, 18, 18, 18, 18, 18, 18, 0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  20, 20, 20, 20, 20, 20, 20],
  [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [21, 21, 21, 21 ,21, 21, 0,  22, 22, 22, 22, 22, 22]
];

const answersArray = [
  ['?', '?', '?', '?', '?', '?', 'x', '?', '?', '?', '?', '?', '?'],
  ['?', 'x', '?', 'x', '?', 'x', '?', 'x', '?', 'x', '?', 'x', '?'],
  ['?', '?', '?', '?', '?', '?', '?', 'x', '?', 'x', '?', 'x', '?'],
  ['?', 'x', '?', 'x', '?', 'x', '?', '?', '?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?', 'x', '?', 'x', '?', 'x', 'x', 'x', '?'],
  ['?', 'x', '?', 'x', 'x', 'x', '?', 'x', '?', '?', '?', '?', '?'],
  ['x', 'x', '?', 'x', '?', '?', '?', '?', '?', 'x', '?', 'x', 'x'],
  ['?', '?', '?', '?', '?', 'x', '?', 'x', 'x', 'x', '?', 'x', '?'],
  ['?', 'x', 'x', 'x', '?', 'x', '?', 'x', '?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?', '?', '?', 'x', '?', 'x', '?', 'x', '?'],
  ['?', 'x', '?', 'x', '?', 'x', '?', '?', '?', '?', '?', '?', '?'],
  ['?', 'x', '?', 'x', '?', 'x', '?', 'x', '?', 'x', '?', 'x', '?'],
  ['?', '?', '?', '?', '?', '?', 'x', '?', '?', '?', '?', '?', '?'],
];

const downArray = [
  [1,  0,  2,  0,  3,  0,  0,  0,  5,  0,  6,  0,  7],
  [1,  0,  2,  0,  3,  0,  8,  0,  5,  0,  6,  0,  7],
  [1,  0,  2,  0,  3,  0,  8,  0,  5,  0,  6,  0,  7],
  [1,  0,  2,  0,  3,  0,  8,  0,  5,  0,  6,  0,  7],
  [1,  0,  2,  0,  3,  0,  8,  0,  5,  0,  0,  0,  7],
  [1,  0,  2,  0,  0,  0,  8,  0,  5,  0,  13, 0,  7],
  [0,  0,  2,  0,  14, 0,  8,  0,  5,  0,  13, 0,  0],
  [15, 0,  2,  0,  14, 0,  8,  0,  0,  0,  13, 0,  16],
  [15, 0,  0,  0,  14, 0,  8,  0,  17, 0,  13, 0,  16],
  [15, 0,  19, 0,  14, 0,  8,  0,  17, 0,  13, 0,  16],
  [15, 0,  19, 0,  14, 0,  8,  0,  17, 0,  13, 0,  16],
  [15, 0,  19, 0,  14, 0,  8,  0,  17, 0,  13, 0,  16],
  [15, 0,  19, 0,  14, 0,  0,  0,  17, 0,  13, 0,  16],
];

const numbersArray = [
  [1,  0,  2,  0,  3,  0,  0,  4,  5,  0,  6,  0,  7],
  [0,  0,  0,  0,  0,  0,  8,  0,  0,  0,  0,  0,  0],
  [9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  10, 0,  0,  0,  0,  0,  0],
  [11, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  0,  0,  12, 0,  13, 0,  0],
  [0,  0,  0,  0,  14, 0,  0,  0,  0,  0,  0,  0,  0],
  [15, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  16],
  [0,  0,  0,  0,  0,  0,  0,  0,  17, 0,  0,  0,  0],
  [18, 0,  19, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  20, 0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [21, 0,  0,  0,  0,  0,  0, 22,  0,  0,  0,  0,  0]
];

const fillOrder = [
  [8, 'down'],
  [9, 'across'],
  [3, 'down'],
  [1, 'down'],
  [1, 'across'],
  [11, 'across'],
  [2, 'down'],
  [15, 'down'],
  [15, 'across'],
  [18, 'across'],
  [19, 'down'],
  [21, 'across'],
  [14, 'down'],
  [14, 'across'],
  [5, 'down'],
  [4, 'across'],
  [6, 'down'],
  [10, 'across'],
  [7, 'down'],
  [12, 'across'],
  [13, 'down'],
  [17, 'across'],
  [22, 'across'],
  [16, 'down'],
  [20, 'across'],
  [17, 'down']
]

export { acrossArray, answersArray, downArray, numbersArray, fillOrder };