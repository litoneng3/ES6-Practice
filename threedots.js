const ages = [12, 14, 15, 17];
const ages2 = [11, 20, 22, 32];
const ages3 = [21, 30, 42, 29];

const allAges = ages.concat(ages2).concat([102]).concat(ages3);

const allAges2 = [...ages, ...ages2, 102, ...ages3]; // Here three dots is the spread operator.
console.log(allAges2);

// Array max. 
const array = [100, 201, 98, 302, 403, 650, 203, 401, 23243854];
const maximum = Math.max(...array);
console.log(maximum);