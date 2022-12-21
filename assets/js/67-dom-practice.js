import {students} from "../data/students.js";

const tblStudentTbody = document.querySelector("#tblStudents tbody");
/* EVENTS*/

document.getElementById("btnShowLowScores").addEventListener("click",()=>{
    const lastTDs = tblStudentTbody.querySelectorAll("tr td:last-child");

    lastTDs.forEach((td, index)=>{
        if(td.innerText<50){
            //td.style.backgroundColor="red";
            tblStudentTbody.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor="red";
        }
    })

});

/*EVENT */

const loadData = () =>{
    let strHtml = "";

    students.forEach((student, index) =>{
        strHtml += `<tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        </tr>`;
    });

    tblStudentTbody.innerHTML = strHtml;
};




loadData();