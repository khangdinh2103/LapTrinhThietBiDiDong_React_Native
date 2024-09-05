const arr = [1, 2, 3, 4, 5, 6];
console.log("Array: ",arr);

//filter 
Array.prototype.myfilter = function(callback) {
    let result = [];
    this.forEach((element, index, array) => {
        if (callback(element, index, array)) {
            result.push(element);
        }
    });
    return result;
};
//in ket qua cua function rewrite
console.log("fillter các số chẵn có trong mảng: ", arr.myfilter((element, index, array) => element % 2 == 0));


let value = arr.myfilter((element, index, array) => element % 2 == 0);
console.log("fillter các số chắn có trong mảng: ", value);

//find 
Array.prototype.find = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return this[index];
        }
    }
}

let find = arr.find((item) => item % 3 == 0);
console.log("Tìm số chia hết cho 3 trong mảng: ",find);

//Some
Array.prototype.some = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return true;
        }
    }
    return false;
}

let some = arr.some((item) => item === 3);
console.log("Một giá trị trong mảng bằng 3: ",some);

//Every
Array.prototype.every = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (!callback(this[index], index, this)) {
            return false;
        }
    }
    return true;
}

let every = arr.every((item) => item < 10);
console.log("Tất cả giá trị trong mảng nhỏ hơn 10: ",every);

//Map
Array.prototype.map = function (callback) {
    let result = [];
    this.forEach((element, index, array) => {
        result.push(callback(element, index, array));
    });
    return result;
}

let map = arr.map((item) => item * 2);
console.log("Mảng sau khi nhân 2: ",map);

//Reduce
Array.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue || 0;
    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}

let reduce = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Tổng các phần tử trong mảng: ",reduce);

//any
Array.prototype.any = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return true;
        }
    }
    return false;
}

let any = arr.any((item) => item === 3);
console.log("Có giá trị 3 trong mảng: ",any);