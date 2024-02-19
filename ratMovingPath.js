function findPath(N, m, row, column, path, currentPath, visited) {
  if (row == N - 1 && column == N - 1) {
    path.push(currentPath);
    return;
  }
 
  if (
    row - 1 >= 0 &&
    visited.get(row - 1+""+column) == 0 &&
    m[row - 1][column] == 1
  ) {
    visited.set(row+""+column, 1);
    findPath(N, m, row - 1, column, path, currentPath + "U", visited);
    visited.set(row+""+column, 0);
  }

  if (
    row + 1 < N &&
    visited.get(row + 1+""+column) == 0 &&
    m[row + 1][column] == 1
  ) {
    visited.set(row+""+column, 1);
    findPath(N, m, row + 1, column, path, currentPath + "D", visited);
    visited.set(row+""+column, 0);
  }

  if (
    column - 1 >= 0 &&
    visited.get(row+""+Number(column - 1)) == 0 &&
    m[row][column - 1] == 1
  ) {
    visited.set(row+""+column, 1);
    findPath(N, m, row, column - 1, path, currentPath + "L", visited);
    visited.set(row+""+column, 0);
  }

  if (
    column + 1 < N &&
    visited.get(row+""+Number(column + 1)) == 0 &&
    m[row][column + 1] == 1
  ) {
    visited.set(row+""+column, 1);
    findPath(N, m, row, column + 1, path, currentPath + "R", visited);
    visited.set(row+""+column, 0);
  }
}

function pathExists(N, m) {
  let path = [];
  let visited = new Map();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let key = i + "" + j ;
      visited.set(key, 0);
    }
  }
  findPath(N, m, 0, 0, path, "", visited);
  return path.length > 0;
}

let N = 4;
let m = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

console.log(pathExists(N, m));

let N2 = 2;
let m2 = [
  [1, 0],
  [1, 0],
];

console.log(pathExists(N2, m2));

// Time Complexity: O(m*n) where n is the length of m input array and m is the number of recursion calls
// Space Complexity: O(m*n) where n is the length of m input array and m is the length of recursion stack