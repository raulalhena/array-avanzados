const cities = ["miami","barcelona","tokio"];

export const capitalizeArrays = (cities) => {
    return cities.map(city => {
        return city.charAt(0).toUpperCase() + city.slice(1);
    });
}

let  students = [
    {
      name: "Tony Parker",
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: "Marc Barchini",
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: "Claudia Lopez",
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: "Alvaro Briattore",
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: "Isabel Ortega",
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: "Francisco Martinez",
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: "Jorge Carrillo",
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: "Miguel López",
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: "Carolina Perez",
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: "Ruben Pardo",
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
    ]

export const calcFinalGrade = (students) => {
    return students.map((student) => {
        return {
            name: student.name,
            final_grade: (((student.firstProject + student.secondProject) * 0.4) / 2) + (student.finalExam * 0.6) 
        }
    });
}

let menu = [
    { name: "Carrots", calories: 150 },
    { name: "Steak", calories: 350 },
    { name: "Broccoli", calories: 120 },
    { name: "Chicken", calories: 250 },
    { name: "Pizza", calories: 520 }
  ];

export const calcAverageCalories = (menu) => {
    return (menu.reduce((accumulator, currentValue) => (accumulator + currentValue.calories), 0)) / menu.length;
}

let product = {
    name: "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
    price: 15.69,
    manufacturer: "JIM'S STORE",
    reviews:
    [
      {  user: "Pavel Nedved",
        comments: "Muy contento",
        rate: 4
      },
      {  user: "Alvaro Trezeguet",
        comments: "No tiene carga rápida",
        rate: 1
      },
      {  user: "David Recoba",
        comments: "Excelente relación calidad/precio.",
        rate: 5
      },
      {  user: "Maribel Romero",
        comments: "Pocas prestaciones",
        rate: 2
      },
      {  user: "Antonio Cano",
        comments: "Materiales malos",
        rate: 1
      },
    ]
  }

const ratingStars = [...document.getElementsByClassName("rating__star")];

const showAverageRate = (product) => {
    return ((product.reviews.reduce((acc, cValue) => acc + cValue.rate, 0)) / product.reviews.length) * 100;
}

const manageStars = (rank) => {
    // Round down to get whole stars:
    var wStars = Math.floor(rank);
    // Check if whole is less than rank.
    // If less than rank, a half star is needed:
    var halfStars = (wStars < rank);

    var output="";
    //Loop through five stars:
    for(let i=1;i<=5;i++){
      //Less than or equal to stars, display a solid star:
      if(i<=wStars){
        output+="</i><i class='fas fa-star' style='color:#fbcc05'></i>";

      //If interation is after a whole star and a half star is needed, display half star:
      }else if( i==wStars+1 && halfStars==true ){
        output+="<i class='fas fa-star-half-alt' style='color:#fbcc05'></i>";

      //Otherwise, display a gray empty star:
      }else{
        output+="<i class='far fa-star' style='color:#bfbfbf'></i>";
      }
    }
    return output;
}

console.log(manageStars(showAverageRate(product)));