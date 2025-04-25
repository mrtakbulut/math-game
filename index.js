const calculator = require('calculator-lib');
const readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;
let timeLimit = 60; // 60 saniye
const startTime = Date.now();

console.log(chalk.blue('=== Matematik Oyununa Hoş Geldiniz! ==='));
console.log(chalk.yellow(`${timeLimit} saniye içinde mümkün olduğunca çok soruyu doğru cevaplayın!\n`));

const operations = ['+', '-', '*', '/'];
const difficultyLevels = {
    easy: { min: 1, max: 10 },
    medium: { min: 10, max: 50 },
    hard: { min: 50, max: 100 }
};

function generateQuestion(difficulty) {
    const range = difficultyLevels[difficulty];
    const num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    const num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    // Bölme işlemi için özel kontrol
    if (operation === '/') {
        return generateDivisionQuestion(range);
    }
    
    return { num1, num2, operation };
}

function generateDivisionQuestion(range) {
    let num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    let num1 = num2 * (Math.floor(Math.random() * 10) + 1);
    return { num1, num2, operation: '/' };
}

function calculateAnswer(num1, num2, operation) {
    switch(operation) {
        case '+': return calculator.add(num1, num2);
        case '-': return calculator.subtract(num1, num2);
        case '*': return calculator.multiply(num1, num2);
        case '/': return calculator.divide(num1, num2);
    }
}

function getDifficulty() {
    if (score < 5) return 'easy';
    if (score < 10) return 'medium';
    return 'hard';
}

while ((Date.now() - startTime) / 1000 < timeLimit) {
    const timeLeft = Math.ceil(timeLimit - (Date.now() - startTime) / 1000);
    const difficulty = getDifficulty();
    const question = generateQuestion(difficulty);
    
    console.log(chalk.cyan(`\nKalan Süre: ${timeLeft} saniye`));
    console.log(chalk.green(`Mevcut Skor: ${score}`));
    
    const questionText = `${question.num1} ${question.operation} ${question.num2} = ?`;
    const userAnswer = parseFloat(readlineSync.question(questionText + ' '));
    const correctAnswer = calculateAnswer(question.num1, question.num2, question.operation);
    
    if (userAnswer === correctAnswer) {
        console.log(chalk.green('Doğru! +1 puan'));
        score++;
    } else {
        console.log(chalk.red(`Yanlış! Doğru cevap: ${correctAnswer}`));
    }
}

console.log(chalk.blue('\n=== Oyun Bitti! ==='));
console.log(chalk.yellow(`Final Skorunuz: ${score}`));

// Skor değerlendirmesi
let message;
if (score >= 15) {
    message = 'Muhteşem! Bir matematik dehası gibisin!';
} else if (score >= 10) {
    message = 'Çok iyi! Matematik yeteneklerin etkileyici!';
} else if (score >= 5) {
    message = 'Güzel! Biraz daha pratik yaparak daha da iyileşebilirsin.';
} else {
    message = 'Matematik pratik yapmaya devam et, gelişeceksin!';
}

console.log(chalk.magenta(message));