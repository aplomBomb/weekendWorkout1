const fs = require("fs");

const dirtyData = fs.readFileSync("./data.txt");

const giveThePeopleWhatTheyWant = (
  //4. Prepare and serve
  theGoods,
  initialBalance,
  medianExpense,
  totalExpense
) => {
  const startingBalance = initialBalance;
  updatedShit = theGoods.map(item => {
    initialBalance = parseFloat(initialBalance) - parseFloat(item[2]);
    return (
      item.toString().replace(/\,/g, " ") +
      ` | Balance: ${parseFloat(initialBalance).toFixed(2)}`
    );
  });
  const addInitial = updatedShit.unshift(
    `Starting balance: ${startingBalance.toFixed(2)}`
  );
  const addBottomFields = updatedShit.push(
    `Total expense: ${totalExpense.toFixed(2)}`,
    `Median expense: ${medianExpense.toFixed(2)}`
  );

  const finalData = updatedShit
    .toString()
    .split(",")
    .join("\n");

  fs.writeFileSync("results.txt", finalData);
};

const doTheCrunchin = theGoods => {
  //3. Snag the good stuff
  const initialBalance = parseFloat(theGoods[0][0]);
  theGoods.shift();
  const medianExpense =
    theGoods
      .map(item => parseFloat(item[2]))
      .reduce((acc, currentValue) => acc + currentValue) / theGoods.length;
  const totalExpense = theGoods
    .map(item => parseFloat(item[2]))
    .reduce((acc, currentValue) => acc + currentValue);

  giveThePeopleWhatTheyWant(
    theGoods,
    initialBalance,
    medianExpense,
    totalExpense
  );
};

const arrayarizeTheDosh = cleanData => {
  //2. Organize it
  const brokenUpShit = cleanData.map(line => {
    return line.split(" ");
  });
  doTheCrunchin(brokenUpShit);
};

const scrubScrub = dirtyData => {
  //1. Clean it up
  const cleanData = dirtyData
    .toString()
    .replace(/[^a-zA-Z0-9\s\. :]/g, "")
    .split("\n");
  arrayarizeTheDosh(cleanData);
  return cleanData
};

scrubScrub(dirtyData);

module.exports = { scrubScrub };
