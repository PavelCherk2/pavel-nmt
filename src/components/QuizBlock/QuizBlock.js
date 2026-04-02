import './QuizBlock.css';
import { BlockOfAnswers } from '../Qustionsfouroptions/Qustionsfouroptions';
import informationData from '../../data/informationData.json';

export function OneAswerBlock({ topicId, subtopicId, questionType }) {
  
  const topic = informationData.find(t => Number(t.id) === Number(topicId));

  const subtopic = topic?.subtopics?.find(st => Number(st.id) === Number(subtopicId));

  const filteredQuestions = subtopic?.tests
    ? subtopic.tests
        .filter(test => test.question.type === questionType)
        .map(test => ({
          id: test.id,
          question: test.question.text,
          image: test.question.image_url,
          options: test.question.answers.map(ans => ({
            id: ans.id,
            text: ans.text,
            is_correct: ans.id === test.question.correct_answer
          }))
        }))
    : [];


  return <BlockOfAnswers questions={filteredQuestions} />;
}
