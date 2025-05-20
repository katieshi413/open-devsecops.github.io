function submitQuiz(quizId) {
  const form = document.querySelector(`.quiz-form[data-quiz-id="${quizId}"]`);
  const header = document.querySelector("#quiz-title");
  header.scrollIntoView({ behavior: "smooth", block: "start" });

  const questions = form.querySelectorAll('.quiz-question');
  let allCorrect = true;
  let allAnswered = true;
  let score = 0;

  questions.forEach((questionDiv, index) => {
    const selected = questionDiv.querySelector('input[type="radio"]:checked');
    const feedback = questionDiv.querySelector('.quiz-feedback');

    feedback.classList.remove('correct', 'incorrect');
    feedback.style.display = "none";

    const correctIndex = window.quizData[quizId].questions[index].correct_index;
    const explanation = window.quizData[quizId].questions[index].explanation;

    if (!selected) {
      feedback.innerHTML = `<p style="color:orange;">Please select an answer.</p>`;
      allAnswered = false;
      allCorrect = false;
    } else if (parseInt(selected.value) === correctIndex) {
      feedback.innerHTML = `<p id="feedback-title" style="color:green;">Correct! ✅</p><p>${explanation}`;
      feedback.classList.add("correct");
      score++;
    } else {
      feedback.innerHTML = `<p id="feedback-title" style="color:red;">Incorrect ❌</p><p>${explanation}`;
      feedback.classList.add("incorrect");
      allCorrect = false;
    }

    feedback.style.display = "block";
  });

  // Disable the Submit button and show Try Again button
  form.querySelector('.submit-btn').disabled = true;
  form.querySelector('.try-again-btn').style.display = 'inline-block';

  if (allAnswered && allCorrect) {
    triggerConfetti();
  }

  if (allAnswered) {
    showScoreModal(score);
  }
}

function triggerConfetti () {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  setTimeout(() => {
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, 700);
}


function showScoreModal(score) {
  const modal = document.getElementById('scoreModal');
  const message = document.getElementById('scoreMessage');

  if (score === 5) {
    message.innerHTML = `<h1>🎉</h1> Perfect score! 💯 <br> You got <b>5</b>/5 questions right!`;
  } else if (score === 4) {
    message.innerHTML = `<h1>🤓</h1> You scored <b>${score}</b>/5. Almost there!`;
  } else {
    message.innerHTML = `<h1>📚</h1> You scored <b>${score}</b>/5. Keep practicing!`;
  }
  
  modal.style.display = 'flex';
}

document.getElementById('closeScoreModal').addEventListener('click', () => {
  document.getElementById('scoreModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('scoreModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});