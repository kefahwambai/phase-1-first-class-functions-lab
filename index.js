// Code your solution in this file!
const drivers = ['Marto', 'Njugush', 'Kimani', 'Chege']

const returnFirstTwoDrivers = () => drivers.slice(0,2)

const returnLastTwoDrivers = () => drivers.slice(-2)

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

let createFareMultiplier = (x) => (fare) => x * fare;

console.log(createFareMultiplier(4))    

const fareDoubler = (createFareMultiplier) => createFareMultiplier*2;
fareDoubler(35);

const fareTripler = (createFareMultiplier) => createFareMultiplier*3;
fareTripler(35);

const selectDifferentDrivers = (drivers,returnFirstTwoDrivers) => returnFirstTwoDrivers(drivers);
