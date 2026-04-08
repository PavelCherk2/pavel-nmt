import './Tests.css';
import { OneAswerBlock } from '../QuizBlock/QuizBlock';
import { InputAnswerBlock } from '../QuizBlockInput/QuizBlockInput';
import informationData from '../../data/informationData.json';
import { SequenceBlock } from '../BlockOfSequence/BlockOfSequence';

const getSubtopicTitle = (topicId, subtopicId) => {

  const topic = informationData.find(t => Number(t.id) === Number(topicId));
  const subtopic = topic?.subtopics?.find(st => Number(st.id) === Number(subtopicId));
  return subtopic?.title;
};

export function TestPage({ topicId, subtopicId }) {
  const title = getSubtopicTitle(topicId, subtopicId)

  return <div className="test-page">
    <h1>
      {title}
    </h1>
    <div>
      <OneAswerBlock topicId={topicId} subtopicId={subtopicId} questionType="four-options" />
      <InputAnswerBlock topicId={topicId} subtopicId={subtopicId} questionType="input-type" />
      <SequenceBlock topicId={topicId} subtopicId={subtopicId} questionType="sequence" />
    </div>
    <button className="result-button">Результат</button>
  </div>
}
