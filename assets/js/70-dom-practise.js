import {students} from "../data/students.js";

const tblStudentTbody = document.querySelector("#tblStudents tbody");


const loadData = () =>{
    let strHtml = "";

    students.forEach((student, index) =>{
        strHtml += `<tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td class="score">${student.point}</td>
        <td><button class="btn-delete btn btn-danger">🗑️</button></td>
        </tr>`;
    });

    tblStudentTbody.innerHTML = strHtml;
};

loadData();


/* EVENTS*/

document.getElementById("btnShowLowScores").addEventListener("click",()=>{
    const lastTDs = tblStudentTbody.querySelectorAll("tr td.score");

    lastTDs.forEach((td, index)=>{
        if(td.innerText<50){
            //td.style.backgroundColor="red";
            tblStudentTbody.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor="red";
        }
    })

});


document.querySelectorAll(".btn-delete").forEach((button)=>{
    button.addEventListener("click",(e)=>{

        const name = e.target.closest("tr").querySelector("td").innerText;

        const result = confirm(`Are you sure to delete ${name} ?`);
        if(result){
            
        }
    })
});


/*EVENT */