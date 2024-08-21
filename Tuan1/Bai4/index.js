const billValues = [275, 40, 430];

billValues.forEach(bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

    const total = bill + tip;
    //sua

    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
});