let averageGrade = 6;
let subjects = ["kotlin", "js", "python"];
let students = [
{
    name: "john",
    lastname: "smith",
    grades: [["10", "7", "3", "9"], ["10", "7", "3", "9"], ["10", "7", "3", "9"]],
},
{
    name: "george",
    lastname: "wesson",
    grades: [["10", "7", "3", "9"], ["10", "7", "3", "9"], ["10", "7", "3", "9"]],
},
{
    name: "harold",
    lastname: "wilson",
    grades: [["10", "7", "3", "9"], ["10", "7", "3", "9"], ["10", "7", "3", "9"]],
}
];


let subj = document.getElementById("subjectsList");
function getSubjects() {
  for(let i = 0; i < subjects.length; i++) {
    let templateSubjects = `
    <th>        
   ${subjects[i]}
    </th>
`

    subj.innerHTML += templateSubjects;
  }
}
getSubjects();

let fullName = document.getElementById("name");

function getName() {
    for(let i = 0; i < students.length; i++) {
        let fName = `<td>
        ${students[i].name += students[i].lastname}
                        </td>`
        fullName.innerHTML += fName;
    }
}
getName();






