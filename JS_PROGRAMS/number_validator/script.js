const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkIfNumberValid = (input) => {
    resultsDiv.textContent = ''; // Clear previous results

    if (input === '') {
        const alertTag = document.createElement('p');
        alertTag.className = 'alert-text';
        alertTag.style.color = 'red';
        alertTag.textContent = 'Please provide a phone number';
        resultsDiv.appendChild(alertTag);
        return;
    }

    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    phoneRegex.test(input) ? (pTag.style.color = '#00471b') : (pTag.style.color = '#4d3800');
    pTag.appendChild(document.createTextNode(`${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`));
    resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
    checkIfNumberValid(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkIfNumberValid(userInput.value);
        userInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
});
