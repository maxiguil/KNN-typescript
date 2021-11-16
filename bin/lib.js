function distance(point1, point2, index) {
  let somme = 0;
  for (i = 0; i < point1.length; i++) {
    somme += Math.pow(point1[i] - point2[i], 2);
  }
  return {
    ans: Math.sqrt(somme),
    index: index
  }
}
function minimum(list) {
  let minimum = 50;
  let minimums = []
  let number = [];
  for (let i = 0; i < list.length; i++) {
    let v = list[i].ans;
    if (v < minimum) {
      minimums.push(v)
      number.push(list[i].index)
    }
  }

  return {
    minimums,
    number

  }
}
class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  render() {
    ellipse(this.x, this.y, 5, 5)
  }
}