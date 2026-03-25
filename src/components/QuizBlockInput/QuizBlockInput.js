import './QuizBlockInput.css';

import { QuestionOption } from '../QuestionsInputOption/QuestionsInputOption';
import answersData from '../../data/inputAswers.json';
import questionsData from '../../data/inputQuestions.json';

export function InputAnswerBlock({ topicId }) {
  const questions = questionsData
    .filter(q => q.topic_id === topicId)
    .map(q => {
      const answer = answersData.find(a => a.question_id === q.id);
      return {
        id: q.id,
        question: q.text,
        options: answer.options
      };
    });

  return (
    <div>
      {questions.map(q => (
        <QuestionOption key={q.id} {...q} />
      ))}
    </div>
  );
}
