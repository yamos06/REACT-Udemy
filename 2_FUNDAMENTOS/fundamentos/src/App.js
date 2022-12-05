import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions/TemplateExpressions';
import Tarefa from './components/Tarefa';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <Tarefa/>
    </div>
  );
}

export default App;
