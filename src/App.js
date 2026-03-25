import './App.css';
import { InputAnswerBlock } from './components/QuizBlockInput/QuizBlockInput';
import { OneAswerBlock } from './components/QuizBlock/QuizBlock';

function App() {

  return (
    <div>
      <OneAswerBlock topicId={1} />
      <InputAnswerBlock topicId={1} />
    </div>
  );
}

export default App;
