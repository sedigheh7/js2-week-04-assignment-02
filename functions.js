const isTheWordSplit = (pArray) => {
    let myWord = pArray[0].split("");
    let myDic = pArray[1].split(",");
    let firstWord = "";
    let secondWord = "";
    let createdWord = "";
      
    for(let index=0;index<myWord.length;index++){
        createdWord+=myWord[index] 
        if(myDic.includes(createdWord)){
             firstWord=createdWord;
            if(myDic.includes(myWord.slice(index+1).join(""))){  
                secondWord=myWord.slice(index+1).join("");
                break;
            }
        }
    } 
    if(myDic.includes(firstWord) && myDic.includes(secondWord)){
        return firstWord + "," + secondWord  
    }else{
        return "not possible"
    }
};

export { isTheWordSplit };
