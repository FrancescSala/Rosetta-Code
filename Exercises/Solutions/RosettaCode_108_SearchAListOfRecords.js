function searchCity(name) {
    return list.findIndex(elem => elem.name=== name);
}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];

/*
console.log(searchCity("Dar Es Salaam")); // should return 6.
console.log(searchCity("Casablanca")); // should return 9.
console.log(searchCity("Cairo")); // should return 1.
console.log(searchCity("Mogadishu")); // should return 4.
console.log(searchCity("Lagos")); // should return 0.
*/