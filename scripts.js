

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

new subjects(["kotlin", "javacript", "python"]);

class students{
    constructor(name, lastname, grades) {
        this.name = name;
        this.lastname = lastname;
        this.grades = grades;
    }

}


new students('john', 'smith', [9, 5, 3])
new students('george', 'wesson', [3, 3, 6])
new students('harold', 'wilson', [6, 7, 3])
*/

let container = document.getElementById('cont');
let header = document.querySelector('#cont thead tr');
let tbody = document.querySelector('#cont tbody');



let averageGrade = [0, 0, 0];
function average() {
    for(let i = 0; i < students.length; i++) {
        for(let k = 0; k < subjects.length; k++) {
        averageGrade[k] += students[i].grades[k];
        }
    }
    for(let i = 0; i < averageGrade.length; i++) {
       averageGrade[i] /= subjects.length;
    }
    
    
    let template = `<th>Name</th>` + `<th>Lastname</th>`;
    for (let i = 0; i < subjects.length; i++) {
        template += `<th>${subjects[i]}</th>`;
    }
    
    header.innerHTML += template;

}

average()



template = '';
for(let i = 0; i < students.length; i++) {
    template += `<tr>
                    <td>${students[i].name}</td>
                    <td>${students[i].lastname}</td>
                    `;
                    for(let k = 0; k < subjects.length; k++) {
                        template += `<td class = "${averageGrade[k] > students[i].grades[k] ?
                             'red' : 'green'}">${students[i].grades[k]}</td>
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
        document.querySelector('#cont tfoot').innerHTML += template; 

        
function addSubject() {
    document.getElementById("add-subject").addEventListener('click', function() {
        let getSubjectValue = document.getElementById("subject-input").value;
            if(getSubjectValue == "") {
                alert("PLEASE FILL INPUT")
                return false;
            } else {
                subjects.push(getSubjectValue);
                header.innerHTML += `<th>${getSubjectValue}</th>`;
            }
        })
}


addSubject()


function addStudent() {
    
    document.getElementById("add-but").addEventListener('click', function() {
        let getStudentName = document.getElementById("add-student-name").value;
        let getStudentLastname = document.getElementById("add-student-lastname").value;
        let getGradeValue = document.getElementById("add-grades").value;
        
    if(getStudentLastname == "" || getStudentName == "" || getGradeValue == "") {
        alert("PLEASE FILL INPUTS")
        return false;
    } else {
        for(let i = 0; i < 1; i++) {
            for(let k = 0; k < 1; k++) {   
               
          tbody.innerHTML += `<tr>` + `<td>${getStudentName}</td>
          <td>${getStudentLastname}</td><td class = "${averageGrade[k] > students[i].grades[k] ? 
           'red' : 'green'}">${getGradeValue}</td>`
           + `</tr>`
           
          }
        }
        }
    })
}

addStudent()





