'use strict'
console.log(`First Bank`);

// Data
const customer1 = {
    owner: 'Taofeeq',
    deposit: [400],
    branch: 'Orile',
    pin: 1111,
};

const customer2 = {
    owner: 'Dayo',
    deposit: [400],
    branch: 'Orile',
    pin: 2222,
};

const customer3 = {
    owner: 'Niyi',
    deposit: [400],
    branch: 'Orile',
    pin: 3333,
};

const customer4 = {
    owner: 'Niyi',
    deposit: [400],
    branch: 'Coker',
    pin: 4444,
};

const customer5 = {
    owner: 'Niyi',
    deposit: [400],
    branch: 'Coker',
    pin: 5555,
};

const customer6 = {
    owner: 'Niyi',
    deposit: [400],
    branch: 'Coker',
    pin: 6666,
};

const customers = [customer1, customer2, customer3, customer4, customer5, customer6];

const banks = ['Orile', 'Coker'];
const Options = ["Make a Deposit", "Check Balance", "To Quit"]


// Displaying Bank Branches
banks.forEach((value, i) => console.log(`Branche ${i+1} => ${value}`));


let branchPrompt = +prompt("Pick your branch");
if (branchPrompt === 1 || 2){
    const pickedBank = banks[branchPrompt -1];
    console.log(`Welcome to ${pickedBank} branch`);
} else alert(`Please input a number`);


// if (branchPrompt === 1) {
//     banks.forEach(function (value) {
//         console.log()
//     });
//     // for (const [i, value] of customers.forEach().entries()){
//     //     console.log(`${i + 1} : ${value}`)
//     // }
// };

// for (const [i, opts] of banks.entries())  {
//     let branchPrompt = +prompt("Pick your branch");
//     if (branchPrompt === 1) {
//         console.log(`Welcome to ${opts} ${i}`)
//     }
// }


// let x = +prompt("What will you like to do?");
let x = prompt("Username");
// console.log(`Username: ${a}`); 
let username;
username = customers.find(acct => acct.owner === x);
console.log(`Account Username: ${username.owner}`);

const pinInput = +prompt("Your Pin");
// let c = ("promptAmount");
// console.log(`Deposition of ${c} has been made`);

// const pickedOption = Options[x -1];
// console.log(`You want to ${pickedOption}`);

if (username?.pin === pinInput){
    console.log('Account Pin: **** \nYou have Successfully logged in.' );
    Options.forEach((value, i) => console.log(`${i+1}. ${value}`));
}else console.log(`Wrong pin`);

const y = +prompt("What will you like to do");

while(y !== 3) {
    // Making a deposit
    
    if (y === 1){
        console.log(`You want to make a deposit`)
        let amount = +prompt("Input the amount you want to deposit");
        if (amount > 0 ) {
            username.deposit.push(amount);
            // console.log(username.deposit)
            console.log(`you have made a deposit of $${amount.toFixed(2)}`);
            Options.forEach((value, i) => console.log(`${i+1}. ${value}`));
        }
        // amount = +prompt("Input the amount you want to deposit");
    };

    // to check balance 
    if (y === 2){
        const balance = username.deposit.reduce((cur, value) => cur + value, 0);
        console.log(`Your Account balance is $${balance.toFixed(2)}`)
    };
};