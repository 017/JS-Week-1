let rao = {
  itemPrice: '250',
  wallet: '300',
  friends: '268',
  age: '30',
  firstName: 'Robert',
  lastName: 'Ochi',
  middleInitial: 'A',
};

let gmo = {
  itemPrice: '900',
  wallet: '600',
  friends: '218',
  age: '29',
  firstName: 'Gordon',
  lastName: 'Ochi',
  middleInitial: 'M',
};

// function to read & output our object's data to console with console.log()
function objParser(obj) {
  //implement new variables
  obj.newWallet = obj.wallet - obj.itemPrice;
  //rounding to make this more readable
  obj.friendsPerYear = Math.round(obj.friends / obj.age);
  obj.fullName = obj.firstName + ' ' + obj.middleInitial + ' ' + obj.lastName;

  console.log(obj.firstName + ' has an item that costs ' + obj.itemPrice + '.');
  console.log(obj.firstName + ' has ' + obj.wallet + ' in their wallet.');
  console.log(obj.firstName + ' has ' + obj.friends + ' friends.');
  console.log(obj.firstName + ' is ' + obj.age + ' years old.');
  //using template literals to make this a little cleaner to read.
  console.log(`This person's first name is ${obj.firstName}.`);
  console.log(`${obj.firstName}'s last name is ${obj.lastName}.`);
  console.log(`${obj.firstName}'s middle intial is ${obj.middleInitial}.`);
  console.log(`${obj.firstName}'s full name is ${obj.fullName}.`);
  console.log(`${obj.firstName} has an average of ${obj.friendsPerYear} friends gained per year.`);
  console.log(`${obj.firstName} would have ${obj.newWallet} left after buying the item.`);
}

objParser(rao);
objParser(gmo);