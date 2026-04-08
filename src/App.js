import './App.css';
import { TestPage } from './components/Tests/Tests';
import SubtopicTheory from './components/TheoryPage/TheoryPage'

function App() {

  return (
    <div>
      {/* <TestPage topicId={1} subtopicId={1}/> */}
      <SubtopicTheory subtopicId={1} />
    </div>
  );
}

export default App;
