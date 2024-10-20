const form = document.getElementById('form');
const convertButton =  document.getElementById("convert-btn");
const output = document.getElementById('output');


const convertToRoman = (number) => {
    const reference = [
        ['M',1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X',10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    
    const result = [];

    reference.forEach(function (arr){
        while (number >= arr[1]){
            result.push(arr[0]);
            number -= arr[1];
        }
    });

    return result.join("");
} ;

const checkTheValidity = (str, int) => {
    let errorText = '';

    if(!str  || str.match(/[e.]/g)) {
        errorText = 'Please enter a valid number'
    } else if ( int < 1){
        errorText = 'Please enter a number greater than or equal to 1'
    } else if (int > 3999){
        errorText = 'Please enter a number less than or equal to 3999'
    }
    else {
        return true;
    }

    //output
    output.innerText = errorText;
    output.classList.add('alert');
    return  false;
};

const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
};

form.addEventListener( 'submit', e => {
    e.preventDefault();
    updateusrIfc();
});



convertButton.addEventListener('click', () => {
    updateusrIfc();
})


const updateusrIfc = () => {
    const numStrg = document.getElementById('number').value;
    const interger = parseInt(numStrg, 10);
    output.classList.remove('hidden');
    clearOutput();

    if (checkTheValidity(numStrg, interger)) {
        output.innerText =  convertToRoman(interger);
    }
}