const BMI = (person) => {
    try {
        let bmi = person.mass / Math.pow(person.height, 2);
        return parseFloat(bmi.toFixed(2)); // Returning as a number with 2 decimal places
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
    let join = new Person("Join", 92, 1.68);
    let mark = new Person("Mark", 78, 1.69);

    let bmiJoin = BMI(join);
    let bmiMark = BMI(mark);

    console.log(`BMI of ${join.name}: ${bmiJoin}`);
    console.log(`BMI of ${mark.name}: ${bmiMark}`);
}

check();