


let subjects = ["kotlin", "javacript", "python"];
let students = [
{
    name: "john",
    lastname: "smith",
    grades: [9, 5, 3]
},
{
    name: "george",
    lastname: "wesson",
    grades: [3, 3, 6]
},
{
    name: "harold",
    lastname: "wilson",
    grades: [6, 7, 3]
}
];

/*

class subjects {
    constructor(subjects) {
        this.subjects = subjects;
    }
}

let subjects = new subjects(["kotlin", "javacript", "python"])



class user{
    constructor(name, lastname, grades) {
        this.name = name;
        this.lastname = lastname;
        this.grades = grades;
    }

}

let john = new user('john', 'smith', [9, 5, 3])
let george = new user('george', 'wesson', [3, 3, 6])
let harold = new user('harold', 'wilson', [6, 7, 3])

*/


let averageGrade = [0, 0, 0];

for(let i = 0; i < students.length; i++) {
    for(let k = 0; k < subjects.length; k++) {
    averageGrade[k] += students[i].grades[k];
    }
}

for(let i = 0; i < averageGrade.length; i++) {
   averageGrade[i] /= subjects.length;
}

let container = document.getElementById('cont');
let header = document.querySelector('#cont thead tr');
let tbody = document.querySelector('#cont tbody');

let template = `<th>Name</th>` + `<th>Lastname</th>`;
for (let i = 0; i < subjects.length; i++) {
    template += `<th>${subjects[i]}</th>`;
}

header.innerHTML += template;

template = '';
for(let i = 0; i < students.length; i++) {
    template += `<tr>
                    <td>${students[i].name}</td>
                    <td>${students[i].lastname}</td>
                    `;
                    for(let k = 0; k < subjects.length; k++) {
                        template += `<td class = "${averageGrade[k] > students[i].grades[k] ? 'red' : 'green'}">${students[i].grades[k]}</td>
                        `;
                    }             

template += `</tr>`

}
tbody.innerHTML += template;

template = `<tr>` +
        `<td colspan ="2">Average</td>`;

        for (let i = 0; i < averageGrade.length; i++) {
            template += `<td>${averageGrade[i]}</td>`;
        
        }

        template += `</tr>`;
        tbody.innerHTML += template; 


document.getElementById("add-subject").addEventListener('click', function addSubject() {
    let getSubjectValue = document.getElementById("subject-input").value;
        if(getSubjectValue == "") {
            alert("PLEASE FILL INPUT")
            return false;
        } else {
            header.innerHTML += `<th>${getSubjectValue}</th>`;
        }
    })

document.getElementById("add-but").addEventListener('click', function addStudent() {
    let getStudentValue = document.getElementById("add-student").value;
    let getGradeValue = document.getElementById("add-grades").value;

})































/*
document.getElementById("add-but").addEventListener('click', function addStudent() {
    let getStudentValue = document.getElementById("add-student").value;
    let getGradeValue = document.getElementById("add-grades").value;
        if (getGradeValue == "", getStudentValue == "", getStudentValue && getGradeValue == "" || getGradeValue && getStudentValue == "") {
            alert("PLEASE FILL ALL INPUTS")
            return false;
        } else {
            
for(let i = 0; i < 1; i++) {
    for(let k = 0; k < 1; k++) {
  //  averageGrade[k] += students[i].grades[k];
  tbody.innerHTML += `<tr><td class = "${averageGrade[k] > students[i].grades[k] ? 'red' : 'green'}">${getGradeValue}</td></tr>`
   
  tbody.innerHTML += `<tr><td>${getStudentValue}</td></tr>`

}
    
}
            
            
            
        }
        
    })
        */