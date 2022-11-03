// let text1 = document.getElementById("studentForm").innerText;

// let text2 = document.getElementById("studentForm").innerHTML;

// let text3 = document.getElementById("studentForm").textContent;


// console.log(text1);
// console.log(text2);
// console.log(text3);

let studentForm = document.getElementById("studentForm");
let studentsContainer = document.querySelector(".students");
let nameInput = studentForm['name'];
let ageInput = studentForm['age'];
let rollInput = studentForm['roll'];

let index = 0;


const students = JSON.parse(localStorage.getItem("students")) || [];


const addStudent = (name, age, roll) => {
    students.push({
            name,
            age,
            roll
        });
    localStorage.setItem("students", JSON.stringify(students));
    return { name, age, roll }; //retuen object (inputName inputAge inputRoll)
};

const addStudentElement = ({ name, age, roll /*=> object (inputName inputAge inputRoll)*/}) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');
    const deletButton = document.createElement('button');


    studentName.innerText = "Name of student: " + name;
    studentAge.innerText = "age of student: " + age;
    studentRoll.innerText = "roll of student: " + roll;
    deletButton.innerText = "delete";


    studentDiv.append(studentName, studentAge, studentRoll, deletButton);
    studentsContainer.appendChild(studentDiv);

    deletButton.onclick = e => {
        e.preventDefault();
        localStorage.removeItem('students');
        studentDiv.style.display = 'none';
    }
};

students.forEach(addStudentElement);


studentForm.onsubmit = e => {
    e.preventDefault();

    const newStudent = addStudent(nameInput.value, ageInput.value, rollInput.value);
    
    addStudentElement(newStudent);

    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
};

