// Write a program that find the area of a triangle where 
// lengths of the three of its sides are 5, 6, 7. 

function calculateAreaTriangle(a, b, c) {
    var area = 0;
    var perimeter = (a + b + c) / 2;

    area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));

    return area;
}


console.log("The perimeter of triangle is: " + calculateAreaTriangle(5, 6, 7));