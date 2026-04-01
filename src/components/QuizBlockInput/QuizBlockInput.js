import './QuizBlockInput.css';
import { QuestionOption } from '../QuestionsInputOption/QuestionsInputOption';
import informationData from '../../data/informationData.json';

export function InputAnswerBlock({ topicId, subtopicId, questionType }) {

  const topic = informationData.find(t => Number(t.id) === Number(topicId));
  const subtopic = topic?.subtopics?.find(st => Number(st.id) === Number(subtopicId));

  const questions = subtopic?.tests
    ? subtopic.tests
      .filter(test => test.question.type === questionType)
      .map(test => ({
        id: test.id,
        question: test.question.text,
        image: test.question.image_url,
        options: test.question.answers.map(ans => ({
          id: ans.id,
          text: ans.text,
          is_correct: test.question.correct_answers?.includes(ans.id) ||
            ans.id === test.question.correct_answer
        }))
      }))
    : [];

  return (
    <div>
      {questions.map(q => (
        <QuestionOption key={q.id} {...q} />
      ))}
    </div>
  );
}
