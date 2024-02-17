// 1 Завдання
// Напишіть такий JavaScript, щоб після натискання
// на кнопку button, елемент <div id="text"> зникав.

const ex1 = () => {
  const firstTaskBtn = document.getElementById('first-task-btn');
  const text = document.getElementById('text');

  firstTaskBtn.addEventListener('click', () => text.hidden = true);
}

ex1();

// 2 Завдання
// Напишіть такий код, щоб після натискання на кнопку, вона зникала

const ex2 = () => {
  const secondTaskBtn = document.getElementById('second-task-btn');

  secondTaskBtn.addEventListener('click', () => secondTaskBtn.hidden = true);
}

ex2();

// 3 Завдання
// Створіть дерево, яке показує/приховує дочірні вузли при кліці
const ex3 = () => {
  
  const childLists = document.querySelectorAll('li>ul');

  for(let childList of childLists) {
    if (childList.parentElement) {
      childList.parentElement.addEventListener('click', (e) => {
        if (e.target === childList.parentElement) {
          childList.hidden === false ? childList.hidden = true : childList.hidden = false;
        }
      })
    }
  }
}

ex3();
