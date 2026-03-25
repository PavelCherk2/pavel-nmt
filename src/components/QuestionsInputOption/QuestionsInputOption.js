import './QuestionsInputOption.css';
import React from 'react';

export function QuestionOption(props) {
  const correctIds = props.options
    .filter(opt => opt.is_correct)
    .map(opt => opt.id);

  const inputCount = correctIds.length;
  const [inputs, setInputs] = React.useState(Array(inputCount).fill(''));
  const [checked, setChecked] = React.useState(false);

  function handleChange(value, index) {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  }

  function handleCheck() {
    setChecked(true);
  }

  function getInputStatus(index) {
    if (!checked) return '';
    const entered = parseInt(inputs[index]);
    
    return correctIds.includes(entered) ? 'correct' : 'wrong';
  }

  return (
    <div className="card">
      <h2>{props.question}</h2>
      <div className="options-list">
        {props.options.map(opt => (
          <div key={opt.id} className="option-item">
            <span className="option-id">{opt.id}</span>
            <span>{opt.text}</span>
          </div>
        ))}
      </div>

      <p className="enter-label">Впишіть цифри:</p>
      <div className="inputs-row">
        {inputs.map((val, i) => (
          <input
            key={i}
            type="number"
            value={val}
            className={`answer-input ${getInputStatus(i)}`}
            onChange={(e) => handleChange(e.target.value, i)}
            disabled={checked}
          />
        ))}
      </div>

      {!checked && (
        <button className="check-btn" onClick={handleCheck}>
          Перевірити
        </button>
      )}

      {checked && (
        <p className="result">
          {inputs.every(v => correctIds.includes(parseInt(v))) && 
           new Set(inputs.map(Number)).size === inputs.length
            ? '' 
            : `Невірно! Правильні відповіді: ${correctIds.join(', ')}`}
        </p>
      )}
    </div>
  );
}
