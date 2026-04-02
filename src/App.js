import './App.css';
import { InputAnswerBlock } from './components/QuizBlockInput/QuizBlockInput';
import { OneAswerBlock } from './components/QuizBlock/QuizBlock';

function App() {

  return (
    <div>
      <OneAswerBlock topicId={1} subtopicId={1} questionType="four-options"/>
      {/* <InputAnswerBlock topicId={1} subtopicId={1} questionType="four-options"/> */}
    </div>
  );
}

export default App;
