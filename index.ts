function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const arr = [
  "Gulsah",
  "Eric",
  "Baran",
  "Thomas",
  "Jay",
  "Louis",
  "Shreya",
  "David"
];

let show = arr[Math.floor(Math.random() * arr.length)];

console.log(arr.slice(0, 2));
