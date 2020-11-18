//Array 

let nilai = [90, 90, 95, 95, 95];

for(let i=0; i<nilai.length; i++) {
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);

// nilai[2] = 90;
// console.log(nilai[nilai.length - 1]);


let Lianly = ["Lianly", "Sally", 18, false];
console.log(Lianly[Lianly.length - 1]);
console.log(Lianly);

//toString()
console.log(Lianly.toString());
//join()
console.log(Lianly.join(" - "));

//pop()
Lianly.pop();
console.log(Lianly.join(" - "))
//push()
Lianly.push(false);
Lianly.push("Hello");
console.log(Lianly.join(" - "));

//shift()
Lianly.shift();
console.log(Lianly.join(" - "));

//unshift
Lianly.unshift("Lianly");
Lianly.unshift("Prof");
console.log(Lianly.join(" - "));

//splice()
Lianly.splice(3,0, "Likuayang","adalah nama saya");
console.log(Lianly.join(" - "));

//concat()
let buah = ["Nenas", "Durian", "Semangka"];
let sayur = ["Wortel", "Caisin", "Kentang"];
let biji = ["Kedelai", "Kacang Hijau", "Kacang Merah"];

let makanan = buah.concat(sayur, buah);
console.log(makanan);

//slice()
let cemilan = ["Ice cream", "Sari gandum", "Martabak"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih);
console.log(cemilanManis);

//sort()
let fruits = ["Jeruk", "Apel", "Mangga", "Pear"];

buah.sort();

console.log(fruits); 

// let bilangan = [30, 1, 2, 3.5, 10, 100];
// bilangan.sort();
// console.log(bilangan); 

let bilangan = [30, 1, 2, 3.5, 10, 100];

let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//Reverse()
let buahBuahan = ["Jeruk", "Apel", "Mangga", "Pear"];

buah.sort().reverse();

console.log(buahBuahan);