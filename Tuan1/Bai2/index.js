const BMI = (person) => {
    try {
        let bmi = person.mass / Math.pow(person.height, 2);
        return parseFloat(bmi.toFixed(2)); // Returning BMI with 2 decimal places
    } catch (error) {
        console.log("Error", error);
    }
}

function Person(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
}

const check = () => {
    let join = new Person("John", 92, 1.68);
    let mark = new Person("Mark", 78, 1.69);

    let bmiJoin = BMI(join);
    let bmiMark = BMI(mark);

    // Determine who has the higher BMI
    if (bmiJoin > bmiMark) {
        console.log(`${join.name}'s BMI (${bmiJoin}) is higher than ${mark.name}'s (${bmiMark})!`);
    } else if (bmiMark > bmiJoin) {
        console.log(`${mark.name}'s BMI (${bmiMark}) is higher than ${join.name}'s (${bmiJoin})!`);
    } else {
        console.log(`Both ${join.name} and ${mark.name} have the same BMI (${bmiJoin})!`);
    }
}

check();