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