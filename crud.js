
var selectedRow = null;
//show alert
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = 'alert alert-${className}';

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);



}
//clar all field
function clearField() {
    document.querySelector("#fName").value = "";
    document.querySelector("#classTiming").value = "";
    document.querySelector("#fatherName").value = "";
    document.querySelector("#teacherName").value = "";
    document.querySelector("#rollNumber").value = "";
    document.querySelector("#contact").value = ""
    document.querySelector("#course").value = "";
    document.querySelector("#sectionName").value= "";

}

//add data
document.getElementById("student-list").addEventListener("submit" , (e) =>{
    e.preventDefault();

const name = document.getElementById("fName").value;
const rollNumber = document.getElementById("rollNumber").value;
const fatherName = document.getElementById("fatherName").value;
const classTiming = document.getElementById("classTiming").value;
const teacherName = document.getElementById("teacherName").value;
const contact =document.getElementById("contact").value;
const course =document.getElementById("course").value;
const sectionName = document.getElementById("sectionName").value;

   

//validdate

    constList = document.querySelector(".student-list");
    const row = document.createElement("tr");
    row.innerHTML=` <td>${name}</td>
                    <td>${rollNumber}</td>
                    <td>${fatherName}</td> 
                    <td>${classTiming}</td> 
                    <td>${teacherName}</td> 
                    <td>${contact}</td>     
                    <td>${course}</td> 
                    <td>${sectionName}</td>`


});



document.querySelector(".student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
});
