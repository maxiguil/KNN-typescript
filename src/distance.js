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