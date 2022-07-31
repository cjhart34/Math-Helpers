function pi() {
    let pi = 355 / 113;
    //alert(pi);
    pi = pi.toFixed(7);
    return pi;
}
function areaSquare(side) {
    let area = side * side;
    // alert(area);
    return area;
}
function areaCircle(radius) {
    let area = Math.PI * radius * radius;
    // alert(area);
    return area;
}
function areaRectangle(length, width) {
    let area = length * width;
    // alert(area);
    return area;
}
function areaTriangle(base, height) {
    let area = 0.5 * base * height;
    // alert(area);
    return area;
}
function perimeterSquare(side) {
    let perimeter = side * 4;
    // alert(perimeter);
    return perimeter;
}
function perimeterRectangle(length, width) {
    let perimeter = (2 * length) + (2 * width);
    // alert(perimeter);
    return perimeter;
}
function perimeterTriangle(side1, side2, side3) {
    let perimeter = side1 + side2 + side3;
    // alert(perimeter);
    return perimeter;
}
function circumferenceCircle(radius) {
    let perimeter = 2 * Math.PI * radius;
    // alert(perimeter);
    return perimeter;
}
function volumeCube(side) {
    let volume = side ** 3; // ** is a shortcut for raising to a power
    // alert(volume);
    return volume;
}
function volumeRectangularPrism(length, width, height) {
    let volume = length * width * height;
    // alert(volume);
    return volume;
}
function volumeCylinder(radius, height) {
    let area = areaCircle(radius);
    // alert(volume);
    return volume;
}
function volumeSphere(radius) {
    let volume = 4 / 3 * Math.PI * (radius ** 3);
    // alert(volume);
    return volume;
}

let select = document.getElementById("select-function");
let inputs = document.getElementById("inputs");
let outputs = document.getElementById("outputs");

let formulas = {
    pi: [],
    areaSquare: ["side"],
    areaCircle: ["radius"],
    areaRectangle: ["length", "width"],
    areaTriangle: ["base", "height"],
    perimeterSquare: ["side"],
    perimeterRectangle: ["length", "width"],
    perimeterTriangle: ["side1", "side2", "side3"],
    circumferenceCircle: ["radius"],
    volumeCube: ["side"],
    volumeRectangularPrism: ["length", "width", "height"],
    volumeCylinder: ["radius", "height"],
    volumeSphere: ["radius"]
}

function updateInputs() {
    let value = select.value;
    let dimensions = formulas[value];
    inputs.innerHTML = "";
    outputs.innerHTML = "";
    for (let i = 0; i < dimensions.length; i++) {
        let text = dimensions[i];
        text += ": <input id='input" + i;
        text += "' oninput='calculate();'>";
        text += "<br>";
        inputs.innerHTML += text;
    }
    calculate();
}
function calculate() {
    let value = select.value;
    let input0 = document.getElementById("input0");
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let param0, param1, param2;
    param0 = input0 ? parseFloat(input0.value) : 0;
    param1 = input1 ? parseFloat(input1.value) : 0;
    param2 = input2 ? parseFloat(input2.value) : 0;

    let answer = 0;
    if (value === "pi") {
        answer = pi();
    } else if (value === "areaSquare") {
        answer = areaSquare(param0);
    } else if (value === "areaCircle") {
        answer = areaCircle(param0);
    } else if (value === "areaRectangle") {
        answer = areaRectangle(param0, param1);
    } else if (value === "areaTriangle") {
        answer = areaTriangle(param0, param1);
    } else if (value === "perimeterSquare") {
        answer = perimeterSquare(param0);
    } else if (value === "perimeterRectangle") {
        answer = perimeterRectangle(param0, param1);
    } else if (value === "perimeterTriangle") {
        answer = perimeterTriangle(param0, param1, param2);
    } else if (value === "circumferenceCircle") {
        answer = circumferenceCircle(param0);
    } else if (value === "volumeCube") {
        answer = volumeCube(param0);
    } else if (value === "volumeRectangularPrism") {
        answer = volumeRectangularPrism(param0, param1, param2);
    } else if (value === "volumeCylinder") {
        answer = volumeCylinder(param0, param1);
    } else if (value === "volumeSphere") {
        answer = volumeSphere(param0);
    }
    outputs.innerHTML = "Answer: " + answer;
}