// elements 
// submit
// values
// put values in array of objects 
// display new value in the table 
// clear value from inputs
// put all data in local storage 
// get item from array
// delete item from table 
// delete item from local storage 

const studentData = document.getElementById("student-data");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const age = document.getElementById("age");
const table = document.getElementById("students");




stdArr  = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];

if(stdArr.length > 0)
{
    displayStudents(stdArr);

    displayFoot();
}

// console.log(students);


studentData.onsubmit = (e)=>
{
    e.preventDefault();
    
    if(firstName.value == '' || lastName.value == '' ||  age.value == '' )
    {
        document.querySelector(".error").innerHTML = `<h3 class="alert alert-danger text-center display-4">  Please Fill All Filds </h3>`;
        return false;
    }


    let uid = Math.floor(Math.random() * 50000);

    // create new objct 
    let student = {uid:uid,firstName:firstName.value,lastName:lastName.value,age:age.value}
    // adding object to array
    stdArr.push(student);
   
    // display new element in html table 
    displayStudent(student);
    if(stdArr.length === 1)
    {
        displayFoot();
    }
    
    
    

    // adding data to loacalstorage 
    localStorage.setItem("students",JSON.stringify(stdArr));



    // clear input values
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    document.querySelector(".error").innerHTML = `<h3 class="alert alert-success text-center display-4">  Item Added </h3>`;




}


//  display all students 
function displayStudents(data){
    let students = document.querySelector("#students tbody");
    data.forEach(student => {
        students.innerHTML +=`
        <tr class="text-center text-white">
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td> <i class="fa fa-trash btn btn-danger" onClick="deleteItem(${student.uid})"  id="${student.uid}"></i> </td>
        </tr>
    `
    })
}
// display one student 
function displayStudent(student)
{
        let students = document.querySelector("#students tbody");
        students.innerHTML +=`
        <tr class="text-center text-white" >
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td> <i class="fa fa-trash btn btn-danger " onClick="deleteItem(${student.uid})"  id="${student.uid}"></i> </td>
        </tr>
    `


}

function displayFoot() 
{
    let foot = `<tfoot>
            <tr>
                <td colspan="4" >
                    <button class="btn btn-danger btn-block clear-all">Clear All </button>
                </td>
            </tr>
        </tfoot>`;
    table.innerHTML += foot;
}

//  delete item 

deleteItem = (id)=>{

    document.getElementById(id).parentNode.parentNode.remove();
    data = JSON.parse(localStorage.getItem("students"));
    newData = data.filter(item => id !== item.uid);
    if(newData.length>0)
    {
        localStorage.setItem("students", JSON.stringify(newData));
    }
    else 
    {
        localStorage.setItem("students","[]");
        document.querySelector("#students tfoot").remove();

    }
}

// deleteItem = (id)=>{
//     console.log(id);
// }