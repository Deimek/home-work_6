


const userNumber = prompt('Ente ryour three-digit number, please');
// console.log(userNumber);

if (userNumber === null) {
    alert('ok, bye');
    console.log('ok, bye');
}
else if (!userNumber.trim() || isNaN(userNumber) || !Number.isInteger(+userNumber)) {
    alert('Error: invalid number, try egain...!!!');
    console.log('Error: invalid number, try egain...!!!');
}
else {
    const userNameLenth = Math.abs(+userNumber);
    if (String(userNameLenth).length === 3) {
        console.log(userNameLenth);
        const userNameTrue = String(userNameLenth);

        const numA = userNameTrue.slice(0, 1);
        // console.log(numA);
        const numB = userNameTrue.slice(1, 2);
        // console.log(numB);
        const numC = userNameTrue.slice(-1);
        // console.log(numC);

        if (numA === numB && numB === numC) {
            alert('all numbers are the same');
            console.log('all numbers are the same');
        } else if (numA === numB && numB !== numC) {
            alert('among the nambers are the same');
            console.log('among the nambers are the same');
        } else if (numA !== numB && numB === numC) {
            alert('among the nambers are the same');
            console.log('among the nambers are the same');
        } else if (numA === numC && numC !== numB) {
            alert('among the nambers are the same');
            console.log('among the nambers are the same');
        } else if (numA !== numB && numB !== numC) {
            alert('does not have the same numbers');
            console.log('does not have the same numbers');
        }
    }
    else {
        alert('Number is not 3-digit');
        console.log('Number is not 3-digit');
    }


}
