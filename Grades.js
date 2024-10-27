function calculateGrade(attemptId) {
    const score = Number(document.getElementById(attemptId).value);
    const resultId = attemptId.replace('Attempt', 'Result');

    if (score < 0 || score > 10) {
        document.getElementById(resultId).textContent = "Input a numbe between 0 and 10.";
        return;
    }
    const percentage = (score/10.0) * 100;
    document.getElementById(resultId).textContent = `Grade Percentage: ${percentage}%`;
}