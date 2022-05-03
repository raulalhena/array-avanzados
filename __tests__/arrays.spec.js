import {capitalizeArrays,
    calcFinalGrade,
    calcAverageCalories
} from '../src/arrays.js';

/* Dada un array de nombre de ciudades, devolver un array con la primera letra de cada ciudad en mayúsculas.

```let cities = ["miami", "barcelona", "madrid"];``` */

test('1+1 = 2',()=>expect(1+1).toBe(2))

describe('array maps',()=>{
test('capitalizeArrays() should return an array with capitalized names from city array',()=>{
    const cities = ["miami", "barcelona", "madrid"];
    const capitalizedCities = ["Miami", "Barcelona", "Madrid"];

    expect(capitalizeArrays(cities)).toMatchObject(capitalizedCities)
})
test('calcFinalGrade() should return an objects array with "name" and "final_grade"',()=>{
    const students = [ {
        name: "A",
        firstProject: 82,
        secondProject: 92,
        finalExam: 70
      }]
      const finalGrade =calcFinalGrade(students);
    expect(finalGrade).toMatchObject([{name:"A",final_grade:0.4*((82+92)/2)+(0.6*70)}])
})
})

describe('array reduce',()=>{
 test('calcAverageCalories() should return the calculated average of calories',()=>{
    let menu = [
        { name: "a", calories: 100 },
        { name: "b", calories: 200 },
        { name: "c", calories: 300 },
      ];

    expect(calcAverageCalories(menu)).toBe(200);
 })
})

