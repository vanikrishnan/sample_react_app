import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import FunctionClickClass from './components/FunctionClickClass';
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <Greet name="Vani">
        <p>This is children props</p>
      </Greet>
      <Greet name="Sri"/>
      <Greet name="Jeya"/>
      <Welcome name="Vanisri">
      <p>This is children props from class Component</p>
      </Welcome>
      <Message />
      <Counter value="2"/>
      <FunctionClick />
      <FunctionClickClass />
      <ParentComp /> */}
      <UserGreeting />
      <NameList />
      <PersonList />
      <StyleSheets primary={true} />
      {/* <Inline /> */}
      <Form />
    </div>
  );
}

export default App;
