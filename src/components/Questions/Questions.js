import React, { useState } from 'react';
import "./Questions.css";

export function CheckTableQuestion({ text, title, options, correctAnswer }) {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isChecked, setIsChecked] = useState(false);

    const getCellStatus = (rowIdx, colIdx) => {
        if (!isChecked) return "";

        const isCorrectChoice = correctAnswer[rowIdx] === options[colIdx].id;
        const isUserChoice = selectedAnswers[rowIdx] === colIdx;

        if (isUserChoice && isCorrectChoice) return "correct";
        if (isUserChoice && !isCorrectChoice) return "wrong";
        if (!isUserChoice && isCorrectChoice) return "missed";
        return "";
    };

    return (
        <div className="card check-table-question">
            <h3 className="question-title">{title}</h3>
            {text && <p className="question-text">{text}</p>}

            <div className="options-display">
                {options.map((option, index) => (
                    <div key={option.id || index} className="option-item-nmt">
                        <span className="letter-box">{String.fromCharCode(65 + index)}</span>
                        {option.image_url ? (
                            <img src={option.image_url} alt="Option" className="option-img" />
                        ) : (
                            <span className="option-label-text">{option.text}</span>
                        )}
                    </div>
                ))}
            </div>

            <p className="mark-label">Позначте відповіді:</p>

            <table className="answer-table">
                <thead>
                    <tr>
                        <th></th>
                        {options.map((_, index) => (
                            <th key={index}>{String.fromCharCode(65 + index)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {options.map((_, rowIdx) => (
                        <tr key={rowIdx}>
                            <td className="row-number">{rowIdx + 1}</td>
                            {options.map((_, colIdx) => {
                                const status = getCellStatus(rowIdx, colIdx);
                                return (
                                    <td key={colIdx} className={`radio-cell ${status}`}>
                                        <label className="custom-radio">
                                            <input
                                                type="radio"
                                                name={`row_${rowIdx}`}
                                                onChange={() => setSelectedAnswers({ ...selectedAnswers, [rowIdx]: colIdx })}
                                                disabled={isChecked}
                                            />
                                            <span className="radio-checkmark"></span>
                                        </label>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {!isChecked ? (
                <button
                    className="check-btn"
                    onClick={() => setIsChecked(true)}
                    disabled={Object.keys(selectedAnswers).length < options.length}
                >Відповісти
                </button>
            ) : []}
        </div>
    );
}