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
import UserGreetings from './component/UserGreetings';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import PureComp from './component/PureComp';
import ParentComp from './component/ParentComp';

function App() {
  return (
    <div className="App">
    <ParentComp />
    {/* <Table /> */}
    {/* <FragmentDemo /> */}
    {/* <LifecycleA />
    <Form /> */}
    {/*<h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
    <Inline />
    <Stylesheet primary={true}/>
    <NameList />
    {/*<UserGreetings />
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
