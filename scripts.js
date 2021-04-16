let subjects = ["kotlin", "js", "python"];
let students = [
{
    name: "john",
    lastname: "smith",
    grades: ["8", "7", "3"],
},
{
    name: "george",
    lastname: "wesson",
    grades: ["5", "7", "3"],
},
{
    name: "harold",
    lastname: "wilson",
    grades: ["6", "7", "3"],
}
];


let getNames = document.getElementById("names");
let table = document.getElementById("table");
let getSubjects = document.getElementById("subjects");

document.getElementById("add-subject").addEventListener('click', function addSubject() {
  let getSubjectValue = document.getElementById("subject-input").value;
  if(getSubjectValue == "") {
    alert("PLEASE FILL INPUT")
    return false;
  } else {
    getSubjects.innerHTML += `<th>${getSubjectValue}</th>`
    
  }
})

document.getElementById("add-but").addEventListener('click', function add() {
  let getStudentValue = document.getElementById("add-student").value;
  let getGradeValue = document.getElementById("add-grades").value;
  if (getGradeValue == "", getStudentValue == "", getStudentValue && getGradeValue == "" || getGradeValue && getStudentValue == "") {
    alert("PLEASE FILL ALL INPUTS")
    return false;
  } else {
  getSubjects.innerHTML += `<td>${getGradeValue}</td>`
  getNames.innerHTML += `<td>${getStudentValue}</td>`
  }
})

for (var k = 0; k < subjects.length; k++) {
    //let subs = subjects[k];
     //console.log(subs)
   getSubjects.innerHTML += `<th>${subjects[k]}</th>`
   
  }

for(var i = 0; i < students.length; i++) {
    getNames.innerHTML += `
    <td>${students[i].name + " " + students[i].lastname}</td>`
     getSubjects.innerHTML += `<td>${students[i].grades}</td>`
       
   }
   


























