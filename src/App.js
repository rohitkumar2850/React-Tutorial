import logo from './logo.svg';
import './App.css';
import { Greet } from './component/Greet';
import Welcome  from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponenet from './component/ParentComponenet';

function App() {
  return (
    <div className="App">
    <ParentComponenet />
    {/*<EventBind />
     <FunctionClick />
    <ClassClick />
     <Counter />
     <Message /> 
      <Greet name="Rohit" heroName="Batman" ></Greet>
       <Greet name="kumar" heroName="Superman">
      <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women"/>
      <Welcome name="kumar" heroName="Superman" />
      <Welcome name="kumar" heroName="Superman" />
      <Welcome name="kumar" heroName="Superman"/>
      <Hello /> */}
    </div>
  );
}

export default App
