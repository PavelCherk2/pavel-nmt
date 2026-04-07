import './BlockOfSequence.css';
import informationData from '../../data/informationData.json';
import { CheckTableQuestion } from '../Questions/Questions';

export function SequenceBlock({ topicId, subtopicId, questionType }) {
 
  const topic = informationData.find(t => Number(t.id) === Number(topicId));
  const subtopic = topic?.subtopics?.find(st => Number(st.id) === Number(subtopicId));

  const questions = subtopic?.tests
    ?.filter(test => test.question.type === questionType)
    .map(test => ({
      id: test.id,
      title: test.question.text, 
      options: test.question.answers,
      correctAnswer: test.question.correct_answer 
    })) || [];

  return (
    <div className="sequence-container">
      {questions.map(q => (
        <CheckTableQuestion 
          key={q.id} 
          title={q.title} 
          options={q.options} 
          correctAnswer={q.correctAnswer}
        />
      ))}
    </div>
  );
}