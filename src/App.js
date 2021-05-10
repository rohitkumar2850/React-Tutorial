import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponenet from "./component/ParentComponenet";
import UserGreetings from "./component/UserGreetings";
import NameList from "./component/NameList";
import Stylesheet from "./component/Stylesheet";
import Inline from "./component/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./component/Form";
import LifecycleA from "./component/LifecycleA";
import FragmentDemo from "./component/FragmentDemo";
import Table from "./component/Table";
import PureComp from "./component/PureComp";
import ParentComp from "./component/ParentComp";
import RefsDemo from "./component/RefsDemo";
import FocusInput from "./component/FocusInput";
import FRParentInput from "./component/FRParentInput";
import PortalDemo from "./component/PortalDemo";
import Hero from "./component/Hero";
import ErrorBoundary from "./component/ErrorBoundary";
import ClickCounter from "./component/ClickCounter";
import Hovercounter from "./component/Hovercounter";
import ClickCounterTwo from "./component/ClickCounterTwo";
import HoverCounterTwo from "./component/HoverCounterTwo";
import User from "./component/User";
import Counter_render from "./component/Counter_render";
import ComponentC from "./component/ComponentC";
import { UserProvider } from "./component/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value='Rohit'>
        <ComponentC />
      </UserProvider>

      {/* <Counter_render>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter_render>

      <Counter_render>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter_render> */}

      {/* <ClickCounterTwo />
    <HoverCounterTwo />
    <User render={ (isLoggedIn) => isLoggedIn ? 'Rohit' : 'Guest'}/>
     */}
      {/* <ClickCounter name='Rohit'/>
    <Hovercounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="jocker" />
      </ErrorBoundary>
     */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
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

export default App;
