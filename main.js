let test = [];
let nb = 10;
let distances = []

function setup() {
  createCanvas(200, 200);
  for (let i = 0; i < nb; i++) {
    test[i] = new point(Math.random() * 200, Math.random() * 200)
  }

}

function draw() {
  background(200);
  distances = [];
  for (let i = 0; i < test.length; i++) {
    test[i].render();
    for (let j = 0; j < test.length; j++) {
      if (i !== j) {
        let p = test[i]
        let p2 = test[j]
        distances.push(distance([p.x, p.y], [p2.x, p2.y], j))

      }
    }
  }
  // console.log(distances)
  console.log(minimum(distances));

}