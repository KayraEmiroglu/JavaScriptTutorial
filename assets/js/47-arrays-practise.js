



document.querySelector("#btnFind").addEventListener("click",()=> {
    const arr = [12,1,2,3,6,87,98,5,21,13,18];

    const maxNumber = getMaxNumber(arr);

    document.querySelector("#result").innerHTML = maxNumber;
});


const getMaxNumber = (arr) => {
    if(!arr || typeof(arr)!=="object" || arr.length<=0 ) return false;

    let maxNum = arr[0];

    for(let i=0; i<arr.length ; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
};

