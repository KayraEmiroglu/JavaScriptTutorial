
const sSortAsc = (arr)=>{
    const sortedArr = [...arr].sort((a,b)=>{
        return a.localeCompare(b);//local olarak sıralama yapıyor.
    });//shallow coppy
    return sortedArr;
};


const sSortDesc = (arr)=>{
    const sortedArr = [...arr].sort((a,b)=> b.localeCompare(a));
        return sortedArr ;
};


const nSortAsc = (arr)=>{
    const sortedArr = [...arr].sort((a,b)=>{
        return a-b;
    });
    return sortedArr;
};

const nSortDesc = (arr)=>{
    const sortedArr = [...arr].sort((a,b)=>{
        return b-a;
    });
    return sortedArr;
};

export{sSortAsc,sSortDesc,nSortAsc,nSortDesc};