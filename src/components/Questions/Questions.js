import "./Questions.css";

export function CheckTableQuestion({ title, text, options, answerCount = 4 }) {
    return (
        <div className="check-table-question">
            <h3>{title}</h3>
            <p>{text}</p>
            {options.map((option, index) => (
                <div className="option">
                    <p>{String.fromCharCode(65 + index)}</p> {option.text ? <p>{option.text}</p> : <img src={option.image} alt="Option" />}
                </div>
            ))}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {options.map((option, index) => (
                            <th key={index}>{String.fromCharCode(65 + index)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(answerCount)].map((_, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            {options.map((option, index) => (
                                <th key={index} className="radio-cell">
                                    <input name={`Answer_${i+1}`} value={option.id ? option.id : index} type="radio" />
                                </th>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}