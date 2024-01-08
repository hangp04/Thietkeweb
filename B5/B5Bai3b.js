function guessNumber() {
    var randomNumber;
    var userInput;
        if (!randomNumber) {
            randomNumber = Math.floor(Math.random() * 10) + 1; // Số ngẫu nhiên từ 1 đến 10
        }

    while (true) {

        userInput = parseInt(prompt("Hãy đoán xem số là 1 đến 10:"));

        if (userInput == randomNumber) {
            alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
            break; // Thoát khỏi vòng lặp while khi đoán đúng số
        } else {
            alert("Số " + userInput + " không chính xác. Hãy đoán lại!");
        }
    }
}

guessNumber();