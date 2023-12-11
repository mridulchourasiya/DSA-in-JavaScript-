// arrays method
const marvel_heros = ["thon", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];
// method push
marvel_heros.push("blackpanther");
//console.log(marvel_heros)

//const allHeros = marvel_heros.concat(dc)
//console.log(allHeros)

// program for merge two table in same arrays list

const all_new_heros = [...marvel_heros, ...dc];
//console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [3, 4, 5, 6], [5, [5, 7, 7]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("mridul"));
console.log(Array.from("mridul"));
// integer spread like a simple elements
console.log(Array.from({name:"hitesh"})) // empty arrays

