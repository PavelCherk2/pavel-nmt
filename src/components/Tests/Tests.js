import './Tests.css';

export function TestPage() {
  return <div>
    <div>
      <button>Тестові питання</button>
      <button>Питання з вводом</button>
      <button>Питання на відповідность</button>
    </div>
    <div>
      <OneAswerBlock topicId={1} subtopicId={1} questionType="four-options" />
      <InputAnswerBlock topicId={1} subtopicId={1} questionType="input-type" />
    </div>
  </div>
}
