import './QuizBlock.css';
import { BlockOfAnswers } from '../Qustionsfouroptions/Qustionsfouroptions';
import answersData from '../../data/answers.json';
import questionsData from '../../data/questions.json';

export function OneAswerBlock({topicId}) {
  const questions = questionsData
    .filter(q => q.topic_id === topicId)
    .map(q => {
      const answer = answersData.find(a => a.question_id === q.id);
      return {
        id: q.id,
        question: q.text,
        image: q.image,
        options: answer.options
      };
    });

  return <BlockOfAnswers questions={questions} />;
}
