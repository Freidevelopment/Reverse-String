
// Get the String from the user
function getValues() {
    // input = 'OLYMPUS'
    // Get the information from the user
    let inputString = document.getElementById('inputString').value;

    let stringResult = reverseString(inputString);

    displayString(stringResult);
}


// 
function reverseString(inputString) {

    let result = '';

    for(let index = inputString.length - 1; index >= 0; index-- ) {
        // This will make it into an Array
        // result.push(inputString[index]);

         result += inputString[index];
    }


    return result;
}

function displayString(stringResult) {
    document.getElementById('alert').classList.remove('invisible');
    document.getElementById('msg').innerHTML = `Your string reversed is: <strong>${stringResult}</strong>`;



  //   // display the new reversed string message
//   Swal.fire({
//     icon: 'error',
//     title: 'Nice!',
//     text: `Your string reversed is: <strong>${stringResult}</strong>`,
//     backdrop: false
// });
}


/* This works to reverse the String,
   however it will not work anywhere else other than Javascript.

function reverseString(inputString) {
    let inputArray = inputString.split('');
    let reverseArray = inputArray.reverse();
    let reverseString = reverseArray.join('');

    return reverseString;
} */