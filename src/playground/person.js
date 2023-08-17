const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };

// let adult = false;
// const age = 18;
// const ageOne = 21;

// const isAdult = (age) => {
//   if (age >= 18) {
//     true;
//   } else {
//     return (adult);
//   }
// };

// const canDrink = (ageOne) => {
//   if (ageOne >= 21) {
//     true;
//   } else {
//     false;
//   }
// };
