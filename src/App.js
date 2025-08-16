import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <>
    <div>My name
      <h1>Udith</h1>
      <h1>Jeewapadma</h1>
    </div>

    <p>Udith Jeewapadma</p>

    <Main name="shehan" age="24 years" campus="SLIIT" city="Gampaha">
      <h4>Wanasingha</h4>
      <p>I am a children</p>
    </Main>

    <Main name="udith" age="24 years" campus="SLIIT" city="Gampaha"/>
    </>
  );
}

export default App;
