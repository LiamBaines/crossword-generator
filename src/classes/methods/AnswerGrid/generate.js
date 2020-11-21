async function generate(n = 0) {
  if (n == 26) {
    return this;
  }
  else {
    let [num, dir] = this.fillOrder[n];
    let successors = await this.getSuccessors(num, dir);
    for (let successor of successors) {
      this.insert(num, dir, successor)
      let val = await this.generate(n + 1)
      if (val !== false) {
        return val;
      } else {
        this.backtrack();
      }
    }
    return false;
  } 
}

export default generate;