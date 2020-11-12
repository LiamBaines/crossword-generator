const fillOrder = [
  // 11s
  [8, 'down'],      // BATCH 1 (A)
  // 4s & 6s
  [6, 'down'],
  [19, 'down'],
  // 8s
  [2, 'down'],
  [13, 'down'],
  // 7s
  [9, 'across'],    // BATCH 2 (B)
  [10, 'across'],
  [18, 'across'],
  [20, 'across'],
  [5, 'down'],      // BATCH 3 (C)
  [14, 'down'],
  // 6s
  [1, 'across'],
  [4, 'across'],
  [21, 'across'],
  [22, 'across'],
  [1, 'down'],
  [7, 'down'],
  [15, 'down'],
  [16, 'down'],
  // 5s
  [11, 'across'],   // BATCH 4 (D)
  [12, 'across'],
  [14, 'across'],
  [15, 'across'],
  [17, 'across'],
  [3, 'down'],
  [17, 'down']
];

export default fillOrder;