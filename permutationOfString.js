function permutation(string, perm, taken, result) {
  if (perm.length == string.length) {
    result.push(perm);
    return;
  }

  for (let i = 0; i < string.length; i++) {
    if (!taken.get(string[i])) {
      taken.set(string[i], true);
      perm += string[i];
      permutation(string, perm, taken, result);
      taken.set(string[i], false);
      perm = perm.substring(0, perm.length - 1);
    }
  }
}

function getPermutation(string){
    let result = [];
    let taken = new Map();
    permutation(string, "", taken, result);
    console.log(result);
}


getPermutation("abc");
getPermutation("xy");

// Time Complexity: O(n!)
// Space Complexity: O(n*n!)
