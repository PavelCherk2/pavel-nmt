import './Qustionsfouroptions.css';
import React from 'react';

// function Answer({ text, status, onClick }) {
//   return (
//     <button className={`answer answer--${status}`} onClick={onClick}>
//       {text}
//     </button>
//   );
// }

// function Question({ question, answers, correct }) {
//   const [selected, setSelected] = React.useState(null);

//   function handleClick(index) {
//     if (selected !== null) return; 
//     setSelected(index);
//   }

//   function getStatus(index) {
//     if (selected === null) return 'default';
//     if (index === correct) return 'correct';       
//     if (index === selected) return 'wrong';        
//     return 'default';
//   }

//   return (
//     <div className="card">
//       <h2>{question}</h2>
//       <div className="answers">
//         {answers.map((ans, i) => (
//           <Answer
//             key={i}
//             text={ans}
//             status={getStatus(i)}
//             onClick={() => handleClick(i)}
//           />
//         ))}
//       </div>
//       {selected !== null && (
//         <p>{selected === correct ? ' Верно!' : ' Неверно!'}</p>
//       )}
//     </div>
//   );
// }

// export function BlockOfAnswers({ questions }) {
//   return (
//     <div>
//       {questions.map(q => (
//         <Question key={q.id} {...q} />
//       ))}
//     </div>
//   );
// }

function Question(props) {
  const [selected, setSelected] = React.useState(null);

  function handleClick(index) {
    if (selected !== null) return;
    setSelected(index);
  }

  return (
    <div className="card">
      <div className='qustion-text'>
        <img src={props.image}></img>
        <h2>{props.question}</h2>
      </div>
      <div className='answers'>
        {props.answers.map((ans, i) => (
          <button
            key={i}
            className={`answer ${selected === null ? '' : i === props.correct ? 'correct' : i === selected ? 'wrong' : ''}`}
            onClick={() => handleClick(i)}
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  )
}

export function BlockOfAnswers({ questions }) {
  return (
    <div className="card-block">
      {questions.map(q => (
        <Question key={q.id} {...q} />
      ))}
    </div>
  );
}
