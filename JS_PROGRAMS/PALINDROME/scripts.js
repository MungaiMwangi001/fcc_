// Get DOM elements
const userInput = document.getElementById("text-input");
const checkpldBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Palindrome check function
const checkWhetherPalindrome = (input) => {
    const originalInput = input;

    // Check for empty input
    if (originalInput.trim() === '') {
        alert("Please input a value");
        return;
    }

    // Clear previous result
    resultDiv.innerHTML = '';

    // Clean the input and check if it's a palindrome
    const cleanedInput = originalInput.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    const isPalindrome = cleanedInput === [...cleanedInput].reverse().join('');
    const resultMsg = `<i>${originalInput}</i> ${isPalindrome ? 'is' : 'is not'} a palindrome.`;

    // Create and append the result
    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    // Show the result container if hidden
    resultDiv.classList.remove('hidden');
};

// Event listeners for button click and Enter key press
checkpldBtn.addEventListener('click', () => {
    checkWhetherPalindrome(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        checkWhetherPalindrome(userInput.value);
        userInput.value = '';
    }
});
