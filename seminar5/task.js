const question =
  " Это чудище сжирает все что встречает на свое пути ,Но насытившись едою умирает вместе с ней ";
const hints = [
  "Подсказка 1 : Дает тепло и свет",
  " Подсказка 2 : Промитей был близок с ним  ",
];
const answer = "огонь";

const riddles = {
  question,
  hints,
  answer,

  askQuestion: function () {
    let userAnswer = prompt(this.question);
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === this.answer.toLowerCase()) {
      alert("Вы ответили верно");
    } else {
      for (const hint of this.hints) {
        alert(hint);
        userAnswer = prompt(this.question);
        userAnswer = userAnswer.toLowerCase();

        if (userAnswer === this.answer.toLowerCase()) {
          console.log("Вы ответили верно");
          return;
        }
      }

      alert("Вы проиграли");
    }
  }
};

riddles.askQuestion();
