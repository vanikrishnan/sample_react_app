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
import LifeCycleA from './components/LifeCycleA';
import Fragments from './components/Fragments';
import Tables from './components/Tables';
import ParentCompo from './components/ParentCompo';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import CounterTwo from './components/CounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import { UserContextProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';

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
      {/* <UserGreeting />
      <NameList />
      <PersonList />
      <StyleSheets primary={true} /> */}
      {/* <Inline /> */}
      {/* <Form />
      <LifeCycleA />
      <Fragments />
      <Tables />
      <ParentCompo /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batsman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="vani"/>
      <HoverCounter /> */}
      {/* <CounterTwo render={(count, incrementCount)=> 
      (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)}/>
       <CounterTwo render={(count, incrementCount)=> 
      (<HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>)}/> */}
      {/* <CounterTwo>
        {(count, incrementCount)=> 
      (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)}
      </CounterTwo>
       <CounterTwo>
         {(count, incrementCount)=> 
      (<HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>)}
     </CounterTwo> */}
     {/* <UserContextProvider value="vani">
     <ComponentC />
     </UserContextProvider>  */}
     {/* <PostList /> */}
     {/* <PostForm /> */}
     {/* <HookCounter /> */}
     {/* <HookCounterTwo /> */}
     {/* <HookCounterThree /> */}
     {/* <HookCounterFour /> */}
     {/* <HookCounterOne /> */}
     {/* <HookMouse /> */}
     {/* <MouseContainer /> */}
     {/* <IntervalHookCounter /> */}
     <DataFetching />
    </div>
  );
}

export default App;
