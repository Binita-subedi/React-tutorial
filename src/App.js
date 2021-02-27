import React, { Component } from 'react' 
 import './App.css'
import Greeting  from './Component/Greeting';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import Styleesheet from './Component/Styleesheet';
import Inline from './Component/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Component/Form'

class App extends Component {
    render() {
    return (
      <div className="App">
      
      <Form />
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Styleesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter /> */}
      {/* <Hello /> */}
        {/* <Greet name='Bruce' heroname='Batman'><p>This is a children props</p></Greet> */}
       {/* <Greet name='Clark' heroname='superman'><button>Action</button></Greet>
       <Greet name='Diana' heroname='wonder women'/> */}
       {/* <Welcome name='Bruce' heroname='Batman'/>
       <Welcome name='Clark' heroname='superman'/> 
        */}
      </div>
    );
  }
}
export default App;
