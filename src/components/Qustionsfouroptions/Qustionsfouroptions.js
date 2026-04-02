import './Qustionsfouroptions.css';
import React from 'react';

function Question(props) {
  const [selected, setSelected] = React.useState(null);

  function handleClick(id) {
    if (selected !== null) return;
    setSelected(id);
  }

  return (
    <div className="card">
      <div className='qustion-text'>
        {props.image && <img src={props.image} alt='question-photo'/>}
        <h2>{props.question}</h2>
      </div>
      <div className='answers'>
        {props.options.map((opt) => (
          <button
            key={opt.id}
            className={`answer ${
              selected === null ? ''
              : opt.is_correct ? 'correct'
              : opt.id === selected ? 'wrong'
              : ''
            }`}
            onClick={() => handleClick(opt.id)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
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