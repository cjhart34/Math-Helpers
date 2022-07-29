function pi() {
    let pi = 355 / 113;
    return pi;
}
function areaSquare(side) {
    let area = side * side;
    alert(area);
    return area;
}
function areaCircle(radius) {
    let area = Math.PI * radius * radius;
    alert(area);
    return area;
}
function areaRectangle(length, width) {
    let area = length * width;
    alert(area);
    return area;
}
function areaTriangle(base, height) {
    let area = 0.5 * base * height;
    alert(area);
    return area;
}
function perimeterSquare(side) {
    let perimeter = side * 4;
    alert(perimeter);
    return perimeter;
}
function perimeterRectangle(length, width) {
    let perimeter = (2 * length) + (2 * width);
    alert(perimeter);
    return perimeter;
}
function perimeterTriangle(side1, side2, side3) {
    let perimeter = side1 + side2 + side3;
    alert(perimeter);
    return perimeter;
}
function perimeterCircle(radius) {
    let perimeter = 2 * Math.PI * radius;
    alert(perimeter);
    return perimeter;
}
function volumeCube(side) {
    let volume = side ** 3; // ** is a shortcut for raising to a power
    alert(volume);
    return volume;
}
function volumeRectangularPrism(length, width, height) {
    let volume = length * width * height;
    alert(volume);
    return volume;
}
function volumeCylinder(radius, height) {
    let area = areaCircle(radius);
    alert(volume);
    return volume;
}
function volumeSphere(radius) {
    let volume = 4 / 3 * Math.PI * (radius ** 3);
    alert(volume);
    return volume;
}