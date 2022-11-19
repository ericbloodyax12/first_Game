function cutStringAndGetNumber(str) {
    let all = str.length
    let myStr = '';
    let array =[];
    let isNumberStart = false;

    for (let i=0;i<all;i++) {

        if (isFinite(str[i])) {
            isNumberStart=true;
            myStr += str[i]
        }  else {
            if(isNumberStart) {
                array.push(myStr)
                myStr = ''
                isNumberStart=false;
            }
        }
    } return(array);

}
export default cutStringAndGetNumber;