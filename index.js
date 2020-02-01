const fs = require("fs");

const giveThePeopleWhatTheyWant = (
  
  theShit,
  initialBalance,
  medianExpense,
  totalExpense,
  remainder
) => {
       
};

const doTheCrunchin = theShit => {
  
  const initialBalance = parseFloat(theShit[0][0]);
  theShit.shift();
  const medianExpense =
    theShit
      .map(item => parseFloat(item[2]))
      .reduce((acc, currentValue) => acc + currentValue) / theShit.length;
  const totalExpense = theShit
    .map(item => parseFloat(item[2]))
    .reduce((acc, currentValue) => acc + currentValue);
  const remainder = initialBalance - totalExpense

  giveThePeopleWhatTheyWant(
    theShit,
    initialBalance,
    medianExpense,
    totalExpense,
    remainder
  );
};

const arrayarizeTheDosh = cleanData => {
  const brokenUpShit = cleanData.map(line => {
    
    return line.split(" ");
  });
  doTheCrunchin(brokenUpShit);
};

const scrubScrub = () => {
  
  const cleanData = fs
    .readFileSync("./data.txt")
    .toString()
    .replace(/[^a-zA-Z0-9\s\. :]/g, "")
    .split("\n");
  arrayarizeTheDosh(cleanData);
};

scrubScrub();
