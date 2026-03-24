import logo from './logo.svg';
import './App.css';
import { BlockOfAnswers } from './components/Qustionsfouroptions/Qustionsfouroptions';

const questionsArr = [
  {
    id: 1,
    question: "Столица Франции?",
    answers: ["Берлин", "Париж", "Рим", "Мадрид"],
    correct: 1
  },
  {
    id: 2,
    question: "Сколько планет в Солнечной системе?",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },
  // {
  //   id: 3,
  //   question: "Какой язык программирования называют 'языком веба'?",
  //   answers: ["Python", "Java", "JavaScript", "C++"],
  //   correct: 2
  // },
  // {
  //   id: 4,
  //   question: "Что такое HTML?",
  //   answers: ["Язык программирования", "Язык разметки", "База данных", "Фреймворк"],
  //   correct: 1
  // },
  // {
  //   id: 5,
  //   question: "Чему равен Math.floor(4.9) в JavaScript?",
  //   answers: ["5", "4", "4.9", "0"],
  //   correct: 1
  // }
];

function App() {
  return (
    <div className="App">
      <BlockOfAnswers questions={questionsArr}></BlockOfAnswers>
    </div>
  );
}

export default App;
