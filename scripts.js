// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices (if needed for future tasks):
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. ForEach Basics
// Log each name
names.forEach(name => console.log(name));

// Log each province
provinces.forEach(province => console.log(province));

// Log each name with its matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation
// Create a new array of province names in all uppercase
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// 3. Name Lengths
// Create a new array using map that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
// Use sort to alphabetically sort the provinces
const sortedProvinces = [...provinces].sort(); // Use spread operator to avoid mutating the original array
console.log(sortedProvinces);

// 5. Filtering Cape
// Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
const remainingProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(remainingProvinces.length);

// 6. Finding 'S'
// Create a boolean array using map to determine if a name contains the letter 'S'.
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// 7. Creating Object Mapping
// Use reduce to transform the names array into an object mapping names to their respective provinces
const nameToProvince = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});

console.log(nameToProvince);
