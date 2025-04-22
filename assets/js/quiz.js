function submitQuiz(quizId) {
  const form = document.querySelector(`.quiz-form[data-quiz-id="${quizId}"]`);
  const header = document.querySelector("#quiz-title");
  header.scrollIntoView({ behavior: "smooth", block: "start" });

  const questions = form.querySelectorAll('.quiz-question');
  let allCorrect = true;
  let allAnswered = true;

  questions.forEach((questionDiv, index) => {
    const selected = questionDiv.querySelector('input[type="radio"]:checked');
    const feedback = questionDiv.querySelector('.quiz-feedback');

    feedback.classList.remove('correct', 'incorrect');
    feedback.style.display = "none";

    const correctIndex = window.quizData[quizId].questions[index].correct_index;
    const explanation = window.quizData[quizId].questions[index].explanation;
    const link = window.quizData[quizId].questions[index].link;

    if (!selected) {
      feedback.innerHTML = `<p style="color:orange;">Please select an answer.</p>`;
      allAnswered = false;
      allCorrect = false;
    } else if (parseInt(selected.value) === correctIndex) {
      feedback.innerHTML = `<p style="color:green;">Correct! ✅</p><p>${explanation} <a href="${link}">See more</a></p>`;
      feedback.classList.add("correct");
    } else {
      feedback.innerHTML = `<p style="color:red;">Incorrect ❌</p><p>${explanation} <a href="${link}">Review here</a></p>`;
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
  }, 650);
}
