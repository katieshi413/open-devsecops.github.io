function resetQuiz(quizId) {
  const form = document.querySelector(`.quiz-form[data-quiz-id="${quizId}"]`);
  const header = document.querySelector("#quiz-title");
  header.scrollIntoView({ behavior: "smooth", block: "start" });
  
  const questions = form.querySelectorAll('.quiz-question');

  questions.forEach((questionDiv) => {
    const selected = questionDiv.querySelector('input[type="radio"]:checked');
    if (selected) selected.checked = false;

    const feedback = questionDiv.querySelector('.quiz-feedback');
    feedback.innerHTML = '';
    feedback.style.display = 'none';
    feedback.classList.remove('correct', 'incorrect');
  });

  // Enable Submit button and hide Try Again button
  form.querySelector('.submit-btn').disabled = false;
  form.querySelector('.try-again-btn').style.display = 'none';
}
