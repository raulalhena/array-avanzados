

function capitalize(text){
    return text.charAt(0).toUpperCase().concat(text.slice(1))
}
export function capitalizeArrays(array){
    return array.map(capitalize)
}

export function calcFinalGrade(studentsArray){
    return studentsArray.map(e => {name:e.name,final_grade:0.4*((e.firstProject + e.secondProject)/2)+(0.6*finalExam)})
}