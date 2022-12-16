const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");


btnAverage.addEventListener("click", ()=>{
    const average = calculateAverage(txtScore1.value,txtScore2.value,txtScore3.value);

    if(!average){
        alert("Please enter valid scores");
        return;
    }


    const score = convertScoreToLetter(average);
    alert(`Average: ${average} Score: ${score}`);
});

//Generic Fonksiyon
const calculateAverage = (num1, num2, num3) => {

    if(!isScoreValid(num1|| !isScoreValid(num2) || !isScoreValid(num3))){
        return false;
    }
    const result = (Number(num1)+Number(num2)+Number(num3))/3;

    return result;
}


const convertScoreToLetter = (num) => {
    if(!isScoreValid(num)) return false;

    if(num>=90 && num <= 100){
        return " A";
    }else if(num>=80 && num<90){
        return " B";
    }else if(num>=70 && num<80){
        return " C";
    }else if(num>=60 && num<70){
        return  " D";
    }else {
        return  "F";
    }
    
}

const isScoreValid = (score) => {

   return  (score || score ===0) && !isNaN(score) && score<=100 && score>0;
}

